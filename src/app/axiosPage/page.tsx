"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api } from "../constants/api";

interface IData {
    name: string,
    status: string,
    species: string,
    gender: string,
    image: string
}
const AxiosPage = () => {
    const [data, setData] = useState<IData[]>([]);
    const [erro, setErro] = useState(false);
    const [erroMessage, setErroMessage] = useState<string>("Página não encontrada");
    const [page, setPage] = useState<string>("");

    useEffect(() => {
      api.get(`/character/?page=${page}`).then((res) => {
        setErro(false);
        setData(res.data.results);
        console.log(res.data.results);
      }).catch((error) => {
        if(error.response.status == 404) {
            setErroMessage("Erro");
        }
        console.log(error);
      })
    
    }, [page])
    

    return (
        <>
            {erro && <h5>{erroMessage}</h5>}
            <h1>Pagina com use effect e axios</h1>
            <input type="text" value={page} onChange={(e) => setPage(e.target.value)} placeholder="1/42" />
            {data.map((item, index) => {
                return(
                    <div>
                        <h2>{item.name}</h2>
                        <Image className="h-auto w-[200px]" height={100} width={100} src={item.image} alt="image from api" priority={true}></Image>
                        <p>{item.species}</p>
                        <p>{item.status}</p>
                        <p>{item.gender}</p>
                    </div>
                )
            })}
        </>
    )
}

export default AxiosPage;