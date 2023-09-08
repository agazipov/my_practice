import { useState, useEffect } from "react";
import { images } from "../../data/data"

export function Slider() {
    const [select, setSelect] = useState(1)

    return (
        <div className="w-[620px] h-[300px] m-5 bg-slate-600 relative rounded-lg">
            {images.map((el, ind, arr) => {
                let compression, move;

                if (!(select === el.id)) {               // сжатие картинок
                    compression = `inset(0 40% 0 40%)`
                } else {
                    compression = `inset(0 0 0 0)`
                };

                if (select === el.id) {                  // перемещение картинок
                    move = `15px`;
                } else {
                    move = `-105px`
                }
                if (select < el.id) { move = `135px` };  // todo: автоматическая настройка падинга + подгон размера холста под колво картинок

                return (
                    <div
                        className="absolute"
                        style={{
                            left: `${72.5 * (el.id - 1)}px`,
                            clipPath: `${compression}`,
                            transform: `translateX(${move})`,
                            transition: `clip-path 1s, transform 1s`,
                        }}
                        onClick={() => { setSelect(el.id) }}
                        key={ind}
                    >
                        <img className="h-[300px] w-[300px] cursor-pointer" src={el.src} alt={el.alt} />
                    </div>
                )
            })}
        </div>
    )
}
