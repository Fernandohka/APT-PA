import Image from "next/image";

interface ICard {
    img: string, 
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
        <div className="w-1/4 rounded-2xl border-black border-2 flex flex-col items-center text-center gap-2">
            <Image src={img} alt="imgCard" width={100} height={100}></Image>
            <p className={`text-xs text-${color}`}>{time} ago</p>
            <p className="text-2xl"><b>{name}</b></p>
            <p className="text-sm py-4">{desc}</p>
            <div className={`flex justify-around w-full py-3 rounded-b-2xl border-t-black bg-${color} text-white`}>
                <div className="flex flex-col items-center w-1/3">
                    <p>{read}m</p>
                    <p className="text-xs">READ</p>
                </div>
                <div className="flex flex-col items-center w-1/3">
                    <p>{views}</p>
                    <p className="text-xs">VIEWS</p>
                </div>
                <div className="flex flex-col items-center w-1/3">
                    <p>{comments}</p>
                    <p className="text-xs">COMMENTS</p>
                </div>
            </div>
        </div>
    )
}