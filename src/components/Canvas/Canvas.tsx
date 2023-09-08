import React, { useEffect, useRef, useState, MouseEvent } from "react"

type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>
    & { block: Array<any> }

const Canvas: React.FC<CanvasProps> = ({ block, ...props }) => {
    const colorArr = [`rgb(125, 6, 6)`, `rgb(184, 138, 0)`, `rgb(11, 50, 150)`, `rgb(0, 107, 5)`, `rgb(113, 0, 115)`, `rgb(12, 138, 96)`]
    const [blocks, setBlocks] = useState<Array<any>>(block) // принимает в стейт созданый объект с блоками (из пропса) и уже в нем с ним работает
    const [rectId, setRectId] = useState<number | null>(null) // хранит ид активного блока

    const canvasRef = useRef<HTMLCanvasElement | null>(null) // для работы с канвас

    const randomColor = (max: number, min: number, arr: Array<string>): string => { // для рандомного вывода цвета
        return arr[Math.floor(Math.random() * (max - min) + min)]
    }

    const cursorHandle = (evt: MouseEvent<HTMLCanvasElement>) => { // возврашает ид блока на котором сейчас курсор
        block.forEach((el) => {
            if (el.x < evt.clientX
                && el.x + 45 > evt.clientX
                && el.y < evt.clientY
                && el.y + 45 > evt.clientY) {
                setRectId(el.id)
            }
        })
    }

    useEffect(() => { // смена цвета при наведении на блок
        setBlocks(blocks.map((el) => {
            if (rectId === el.id) {
                el.c = randomColor(colorArr.length, 0, colorArr)
            }
            return el
        }))
    }, [rectId])

    useEffect(() => { // изменение прозрачности через мутацию объекта с блоками (при наведении на блока)
        let num = 1
        let coun = setInterval(() => {
            num -= 0.1
            setBlocks(blocks.map((el) => {
                if (rectId === el.id) {
                    el.o = +num.toFixed(1)
                }
                return el
            }))
            if (num < 0.1) { clearInterval(coun) }
        }, 100)
    }, [rectId])


    useEffect(() => { // отрисовка блоков
        const canvas = canvasRef.current
        if (!canvas) {
            return
        }
        const context = canvas.getContext('2d')
        if (!context) {
            return
        }

        context.fillStyle = `white`
        context.fillRect(0, 0, 500, 300)

        blocks.forEach((el, ind) => {
            context.clearRect(el.x, el.y, el.w, el.h)
            if (ind === rectId) {
                context.globalAlpha = 1
                context.fillStyle = el.c
            }
            else {
                context.globalAlpha = el.o
                context.fillStyle = el.c
            }
            context.fillRect(el.x, el.y, el.w, el.h)
        })
    }, [rectId, blocks])

    return (
        <div className="m-5 bg-black w-[500px]" >
            <canvas
                className="border-2 border-blue-600"
                ref={canvasRef}
                width={props.width}
                height={props.height}
                onMouseMove={(evt) => cursorHandle(evt)}
            />
        </div>
    )
}
export default Canvas

