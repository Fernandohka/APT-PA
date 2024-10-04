"use client";
import { useEffect, useState } from "react";

interface IData {
    id: string,
    name: string,
}

const fetchPage = () => {
    const [character, setCharacter] = useState<IData[]>([]);

    useEffect(() => {
      const load = async () => {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        setCharacter(data.results);
        console.log(data);
      }
      load();
    }, [])
    

    return(
        <>
            <h1>Fetch Nativo sla oq</h1>
            {
                character.map((item) => {
                    return(
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                        </div>
                    )
                })
            }
        </>
    )
}

export default fetchPage;