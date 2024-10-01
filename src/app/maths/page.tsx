"use client";

import React, { useState } from "react";

const maths:React.FC = () => {
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [res, setRes] = useState<number | undefined>();
    const msgError = "Digite um número válido";

    const handleSoma = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if(!isNaN(n1) && !isNaN(n2)){
            setRes(n1 + n2);
        }
        else {
            setRes(undefined);
        }
    }
    const handleSubtracao = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if(!isNaN(n1) && !isNaN(n2)){
            setRes(n1 - n2);
        }
        else {
            setRes(undefined);
        }
    }
    const handleMult = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if(!isNaN(n1) && !isNaN(n2)){
            setRes(n1 * n2);
        }
        else {
            setRes(undefined);
        }
    }
    const handleDivisao = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if(!isNaN(n1) && !isNaN(n2) && n2 !== 0){
            setRes(n1 / n2);
        }
        else {
            setRes(undefined);
        }
    }

    return (
        <>
         <h1>Use client com controle de estado</h1>
         <div>
            <label htmlFor="num1">Numero 1: </label>
            <input id="num1" type="text" value={num1} onChange={(e) => {setNum1(e.target.value)}}/>
         </div>
         <div>
            <label htmlFor="num2">Numero 2: </label>
            <input id="num2" type="text" value={num2} onChange={(e) => {setNum2(e.target.value)}}/>
         </div>
         <div>
            <div className="flex gap-2">
                <h2>Soma: </h2>
                <button onClick={handleSoma}>SOMA </button>
            </div>

            <div className="flex gap-2">
                <h2>Subtração: </h2>
                <button onClick={handleSubtracao}>SUBTRAÇÃO </button>
            </div>

            <div className="flex gap-2">                    
                <h2>Multiplicação: </h2>
                <button onClick={handleMult}>MULTIPLICAÇÃO </button>
            </div>

            <div className="flex gap-2">
                <h2>Divisão: </h2>
                <button onClick={handleDivisao}>DIVISÃO </button>
            </div>

            <div>
                {!isNaN(res ?? NaN) ? res : msgError}
            </div>
         </div>
        </>
    )
}

export default maths