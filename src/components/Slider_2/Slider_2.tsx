import { useState } from "react"
import { sliderImages } from "../../data/data"
import { backgroundSlider } from "../../data/data"
import "./Slider_2.css"

export function Slider_2() {
    const [posImag, setPosImag] = useState([-450, 0, 450, 900])
    const [posBack, setPosBack] = useState([-450, 0, 450, 900])
    const [indexImg, setIndexImg] = useState([2, 3, 4, 1])
    const [indexBck, setIndexBck] = useState([2, 3, 4, 1])
    const [activ, setActiv] = useState(false)

    const indexSwapUp = (arr1: any[]): Array<any> => {
        const a = arr1[0]
        arr1.shift()
        arr1.push(a)
        return arr1
    }
    const indexSwapDown = (arr1: any[]): Array<any> => {
        const a = arr1[arr1.length - 1]
        arr1.pop()
        arr1.unshift(a)
        return arr1
    }

    function handleUp() {
        setActiv(true)
        setPosImag(indexSwapDown(posImag))
        setIndexImg(indexSwapDown(indexImg))
        setPosBack(indexSwapUp(posBack))
        setIndexBck(indexSwapUp(indexBck))
        setTimeout(() => {
            setActiv(false)
        }, 750);
    }
    function handleDown() {
        setActiv(true)
        setPosImag(indexSwapUp(posImag))
        setIndexImg(indexSwapUp(indexImg))
        setPosBack(indexSwapDown(posBack))
        setIndexBck(indexSwapDown(indexBck))
        setTimeout(() => {
            setActiv(false)
        }, 750);
    }

    return (
        <div className="w-[600px] h-[450px] m-5 bg-slate-600 relative rounded-lg overflow-hidden">
            {sliderImages.map((el, ind) => {
                return (
                    <div
                        className="absolute left-[150px]"
                        key={ind}
                        style={{
                            zIndex: `${indexImg[ind]}`,
                            transform: `translateY(${posImag[ind]}px)`,
                            transition: `transform 1s`,
                        }}
                    >
                        <img className="h-[450px] w-[450px]" src={el.src} alt={el.alt} />
                    </div>
                )
            })}
            {backgroundSlider.map((el, ind) => {
                return (
                    <div
                        className={el.className}
                        key={ind}
                        style={{
                            zIndex: `${indexBck[ind]}`,
                            transform: `translateY(${posBack[ind]}px)`,
                            transition: `transform 1s`,
                        }}
                    >
                        <p className="text-white text-center text-lg font-bold">{el.header}</p>
                        <p className="text-white text-center text-xs px-[10px]">{el.text}</p>
                    </div>
                )
            })}
            <div className="absolute left-[125px] bottom-[130px] z-10">
                <button className="cursor-pointer" style={{ transform: `rotate(180deg)` }} onClick={handleDown} disabled={activ}></button>
            </div>
            <div className="absolute left-[145px] bottom-[150px] z-10">
                <button className="cursor-pointer" onClick={handleUp} disabled={activ}></button>
            </div>
        </div>
    )
}