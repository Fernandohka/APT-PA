"use client"

import { Card } from "@/components/card";
import Image from "next/image";



const cards:React.FC = () => {
    return(
        <>
            <div className="flex justify-center items-center h-svh gap-6">
                <Card img="" name="Post One" time="4 days" desc="Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor" read="4" views="5123" comments="32" color="pink-600"></Card>
                
                <Card img="" name="Post Two" time="1 week" desc="Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor" read="7" views="7152" comments="21" color="orange-500"></Card>
                
                <Card img="" name="Post Three" time="3 week" desc="Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor" read="5" views="3021" comments="15" color="green-500"></Card>
            </div>
        </>
    )
}

export default cards;