import Image from "next/image";

interface IPerson {
    params: {
        id: string,
    }
}

interface IData {
    id: string,
    name: string,
    status: string,
    species: string,
    image: string,
}

interface IDataStaticIndex {
    results: IData[];
}

const Person = async ({params: {id}} : IPerson) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data: IData = await res.json();

    return(
        <div>
            <h1>{data.id}</h1>
            <p>{data.name}</p>
            <p>{data.species}</p>
            <Image className="h-auto w-[500px]" src={data.image} alt="" height={100} width={100} priority={true}></Image>
        </div>
    )
}

export default Person;

export async function generateStaticParams() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data: IDataStaticIndex = await res.json();
    return data.results.map((item) => item.id.toString());
}