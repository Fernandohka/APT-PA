"use client";

import { useState } from "react";

const generalFunction:React.FC = () => {
    const [numero1, setNumero1] = useState<string>("");
    const [numero2, setNumero2] = useState<string>("");
    
    const [resSoma, setResSoma] = useState<number | undefined>();
    const [resSubt, setResSubt] = useState<number | undefined>();
    const [resMult, setResMult] = useState<number | undefined>();
    const [resDivi, setResDivi] = useState<number | undefined>();

    const Erro = "Digite um número válido";
    
    interface handleProps {
        a:string;
        b:string;
    }


    function handleAll({a, b}:handleProps) {
        let num1 = parseFloat(a);
        let num2 = parseFloat(b);
        if(!isNaN(num1) && !isNaN(num2)){
            setResSoma(num1 + num2);
            setResSubt(num1 - num2);
            setResMult(num1 * num2);
            setResDivi((num2 != 0) ? num1 / num2 : undefined);
        }
        else{
            setResSoma(undefined);
            setResSubt(undefined);
            setResMult(undefined);
            setResDivi(undefined);
        }
    }

    return (
        <>
            <h1>Titulo</h1>
            <div>
                <input type="text" placeholder="numero 1" value={numero1} onChange={(e) => {setNumero1(e.target.value)}}/>
            </div>
            <div>
                <input type="text" placeholder="numero 2" value={numero2} onChange={(e) => {setNumero2(e.target.value)}} />
            </div>
            <div>
                <button onClick={() => {handleAll({a:numero1, b:numero2})}}>Calcular Todas</button>
            </div>
            <div>
                <div>
                    <h2>Soma: </h2>
                    <p>{!isNaN(resSoma ?? NaN) ? resSoma : Erro}</p>
                </div>

                <div>
                    <h2>Subtração: </h2>
                    <p>{!isNaN(resSubt ?? NaN) ? resSubt : Erro}</p>
                </div>

                <div>
                    <h2>Multiplicação: </h2>
                    <p>{!isNaN(resMult ?? NaN) ? resMult : Erro}</p>
                </div>

                <div>
                    <h2>Divisão: </h2>
                    <p>{!isNaN(resDivi ?? NaN) ? resDivi?.toFixed(2) : Erro}</p>
                </div>
            </div>
        </>
    )
}

export default generalFunction;