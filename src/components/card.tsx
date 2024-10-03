import Image, { StaticImageData } from "next/image";

interface ICard {
    img: StaticImageData, 
    name: string, 
    time: string, 
    desc: string, 
    read: string, 
    views: string, 
    comments: string,
    color: string
}

export const Card = ({img, name, time, desc, read, views, comments, color}: ICard) => {

    return(
        <div className="w-1/4 rounded-3xl flex flex-col justify-between items-center text-center gap-2 bg-white h-[500px] hover:scale-110 ease-in-out transition w-80">
            <Image src={img} alt="imgCard" className="rounded-t-2xl w-full max-h-52 object-cover"></Image>
            <p className={`text-xs text-${color}`}>{time} ago</p>
            <p className="text-2xl"><b>{name}</b></p>
            <div className="overflow-auto">
                <p className="text-sm py-4">{desc}</p>
            </div>
            <div className={`flex justify-around w-full  rounded-b-2xl border border-black bg-${color} text-white`}>
                <div className="flex flex-col items-center w-1/3 py-3">
                    <p>{read}m</p>
                    <p className="text-xs">READ</p>
                </div>
                <div className="flex flex-col items-center w-1/3 border-x border-black py-3">
                    <p>{views}</p>
                    <p className="text-xs">VIEWS</p>
                </div>
                <div className="flex flex-col items-center w-1/3 py-3">
                    <p>{comments}</p>
                    <p className="text-xs">COMMENTS</p>
                </div>
            </div>
        </div>
    )
}