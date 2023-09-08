export interface Iimages {
    id: number
    src: string
    alt: string
}

export const images = [
    {
        id: 1,
        src: "../image/BGY2VyYfFOs.jpg",
        alt: `girl_1`,
    },
    {
        id: 2,
        src: "../image/BLRCi31cvn0.jpg",
        alt: `girl_2`,
    },
    {
        id: 3,
        src: "../image/dey8PSyOEsc.jpg",
        alt: `girl_3`,
    },
    {
        id: 4,
        src: "../image/evvDoWX46RI.jpg",
        alt: `girl_4`,
    },
    {
        id: 5,
        src: "../image/hnIm7K_f0SA.jpg",
        alt: `girl_5`,
    },
]

export const sliderImages = [
    {
        id: 1,
        src: "../slider/BGY2VyYfFOs.jpg",
        alt: `violet_girl`,
    },
    {
        id: 2,
        src: "../slider/f_qmt4AAvok.jpg",
        alt: `pink_girl`,
    },
    {
        id: 3,
        src: "../slider/KWNLTr70DIE.jpg",
        alt: `blue_girl`,
    },
    {
        id: 4,
        src: "../slider/UMp9b-IdyOk.jpg",
        alt: `grey_girl`,
    },
]

export const backgroundSlider = [
    {
        id: 1,
        className: "flex flex-col justify-center items-center absolute w-[150px] h-[450px] bg-[#9bafae]",
        header: `Амазонка`,
        text: `Воинствующие женщины, родом из кочевых племен Южных Морей`,
    },
    {
        id: 2,
        className: "flex flex-col justify-center items-center absolute w-[150px] h-[450px] bg-[#cb6b5f]",
        header: `Варвар`,
        text: `Всегда находится на краю цивилизации`,
    },
    {
        id: 3,
        className: "flex flex-col justify-center items-center absolute w-[150px] h-[450px] bg-[#862376]",
        header: `Волшебница`,
        text: `Бунтарская женщина, родом из древнего клана Магов Востока`,
    },
    {
        id: 4,
        className: "flex flex-col justify-center items-center absolute w-[150px] h-[450px] bg-[#bfa58e]",
        header: `Ассасин`,
        text: `Когда-то давно, верховные маги были совращены Диабло, и стали служить злу`,
    },
]

export const createBlock = (width: number, height: number) => {
    let lenghtW = width / 50
    let lenghtH = height / 50
    let arr: Array<any> = []
    for (let index = 0; index < lenghtH; index++) {
        for (let a = 0; a < lenghtW; a++) {
            arr = [
                ...arr,
                { id: index * 10 + a, x: a * 50, y: index * 50, w: 45, h: 45, c: `black`, o: 1 }
            ]
        }
    }
    return arr
}