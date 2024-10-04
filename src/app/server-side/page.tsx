import Link from "next/link";
import { Suspense } from "react";

type IData = {
    results: {
        name: string,
        status: string,
        id: string,
    }[]
}

const serverSide = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data:IData = await res.json()
    console.log(data);

    return(
        <>
            <h1>server Side Rendering</h1>
            <Suspense fallback={<div>Loading...</div>}>
            {data.results.map((item, index) => {
                return(
                    <div key={index}>
                        <h2>{item.name}</h2>
                        <Link href={`/person/${item.id}`}>ABRIR</Link>
                    </div>
                )
            })}

            </Suspense>
        </>
    )
}

export default serverSide;