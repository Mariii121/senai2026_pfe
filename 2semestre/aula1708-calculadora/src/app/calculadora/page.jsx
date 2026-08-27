'use client';

import { useState } from "react";
import Header from "../components/header";

export default function Calculadora() {
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [result, setResult] = useState(0);
    const [mensagem, setMensagem] = useState("");

    function Somar() {
        if (n1 === "" || n2 === "") {
            setMensagem("Digite os dois números!");
            return;
        }

        setMensagem("");
        setResult(Number(n1) + Number(n2));
    }

    function Subtrair() {
        if (n1 === "" || n2 === "") {
            setMensagem("Digite os dois números!");
            return;
        }

        setMensagem("");
        setResult(Number(n1) - Number(n2));
    }

    function Multiplicar() {
        if (n1 === "" || n2 === "") {
            setMensagem("Digite os dois números!");
            return;
        }

        setMensagem("");
        setResult(Number(n1) * Number(n2));
    }

    function Dividir() {
        if (n1 === "" || n2 === "") {
            setMensagem("Digite os dois números!");
            return;
        }

        if (Number(n2) === 0) {
            setMensagem("Não é possível dividir por zero!");
            return;
        }

        setMensagem("");
        setResult(Number(n1) / Number(n2));
    }

    function RaizQuadrada() {
        if (n1 === "") {
            setMensagem("Digite um número no Número 1!");
            return;
        }

        if (Number(n1) < 0) {
            setMensagem("Não existe raiz quadrada de número negativo!");
            return;
        }

        setMensagem("");
        setResult(Math.sqrt(Number(n1)));
    }

    return (
        <>
            <Header />

            <main className="calculadora">
                <h1>Calculadora</h1>

                <label htmlFor="n1">Número 1</label>
                <input
                    id="n1"
                    type="number"
                    value={n1}
                    onChange={(e) => setN1(e.target.value)}
                />

                <label htmlFor="n2">Número 2</label>
                <input
                    id="n2"
                    type="number"
                    value={n2}
                    onChange={(e) => setN2(e.target.value)}
                />

                <div className="resultado">
                    Resultado: {result}
                </div>

                {mensagem && (
                    <p className="mensagem">{mensagem}</p>
                )}

                <div className="botoes">
                    <button onClick={Somar}>Somar +</button>
                    <button onClick={Subtrair}>Subtrair −</button>
                    <button onClick={Multiplicar}>Multiplicar ×</button>
                    <button onClick={Dividir}>Dividir ÷</button>
                    <button onClick={RaizQuadrada}>Raiz √</button>
                </div>
            </main>
        </>
    );
}