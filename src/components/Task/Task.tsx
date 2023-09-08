import { useState } from "react";


export function Task() { // кастомные курсоры при вызове событий
    const [value, setValue] = useState(String);
    const [task, setTask] = useState([{ id: 0, value: `test`, shadow: true, hidden: false }, { id: 1, value: ``, shadow: false, hidden: false }, { id: 2, value: ``, shadow: false, hidden: false }]);

    const handleDrag = (evt: any, index: number) => {
        setValue(`test`)
    }

    const handleDragEnd = (evt: any, index: number) => {
        setTask(
            task.map((el) => {
                if (index === el.id) {
                    el.value = value;
                    el.hidden = false;
                    el.shadow = false;
                } else {
                    el.value = ``;
                }
                return el;
            })
        )
    }
    const handleDragOver = (evt: any, index: number) => {
        evt.preventDefault();
        setTask(
            task.map((el) => {
                if (index === el.id) {
                    el.shadow = true;
                    el.hidden = true;
                } else {
                    el.shadow = false;
                }
                return el;
            })
        )
    }
    const handleDrop = (evt: any, index: number) => {
        evt.preventDefault();
        setTask(
            task.map((el) => {
                if (index === el.id) {
                    el.value = value;
                    el.hidden = false;
                    el.shadow = false;
                } else {
                    el.value = ``;
                }
                return el;
            })
        )
    }

    const style = `flex justify-center items-center w-[140px] h-[50px]`
    const shadow = `border-t-2 border-blue-600`
    const dragElement = `flex justify-center items-center w-[100px] h-[30px] bg-slate-200 p-5 rounded-lg cursor-grab active:cursor-grabbing`
    const hidden = `hidden`
    const block = `block`

    return (
        <div className="flex flex-col gap-[20px] w-[620px] h-[200px] m-5 bg-slate-400 relative rounded-lg ">
            <div className="flex justify-around pt-10">
                <div className="flex justify-center items-center w-[100px] h-[30px] p-5 rounded-lg bg-gradient-to-r from-pink-400 to-blue-600">Start</div>
                <div className="flex justify-center items-center w-[100px] h-[30px] p-5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600">Progress</div>
                <div className="flex justify-center items-center w-[100px] h-[30px] p-5 rounded-lg bg-gradient-to-r from-yellow-400 to-blue-600">End</div>
            </div>
            <div className="flex justify-around">
                {task.map((el, ind) => {
                    return (
                        <div
                            key={ind}
                            className={`${style} ${el.shadow && shadow}`}
                            onDragOver={(evt) => handleDragOver(evt, el.id)}
                            onDrop={(evt) => handleDrop(evt, el.id)}
                        >
                            {el.value === `test` &&
                                <div
                                    className={`${el.hidden ? hidden : block} ${dragElement}`}
                                    draggable
                                    onDragStart={(evt) => handleDrag(evt, el.id)}
                                    onDragEnd={(evt) => handleDragEnd(evt, el.id)}
                                >
                                    Тащить
                                </div>}
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}