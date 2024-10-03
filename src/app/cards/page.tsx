"use client"

import { Card } from "@/components/card";
import Image from "next/image";
import img1 from "../img/Card1.png"
import img2 from "../img/Card2.png"
import img3 from "../img/Card3.png"




const cards:React.FC = () => {
    return(
        <>
            <div className="flex justify-center items-center h-svh gap-10 bg-gradient-to-r from-neutral-600 from-10% to-neutral-400 to-70% flex-wrap pb-16 pt-10 bg-scroll overflow-y-scroll">
                <Card img={img1} name="Post One" time="4 days" desc="Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor" read="4" views="5123" comments="32" color="pink-600"></Card>
                
                <Card img={img2} name="Post Two" time="1 week" desc="Adipisicing elit. Ducimus, repudiandae corrupti amet temporibus omnis provident illum maxime quod. Lorem ipsum dolor" read="7" views="7152" comments="21" color="orange-500"></Card>
                
                <Card img={img3} name="Post Three" time="3 week" desc="Repudiandae corrupti amet temporibus omnis provident illum maxime. Ducimus, lorem ipsum dolor adipisicing elit" read="5" views="3021" comments="15" color="green-500"></Card>
            </div>
        </>
    )
}

export default cards;