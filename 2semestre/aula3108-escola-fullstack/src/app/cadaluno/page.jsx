'use client';
import { useState } from "react";
import Header from "../components/header";

export default function CadAluno() {
    const [aluno, setAluno] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');

    return (
        <>
            <Header />
            <h2>Cadastro de alunos</h2>
            <form action="">
                <label htmlFor="aluno">Aluno</label>
                <input type="text" id="aluno" value={aluno} onChange={(e) => setAluno(e.target.value)} />

                <label htmlFor="t1">T1</label>
                <input type="number" id="t1" value={t1} onChange={(e) => setT1(e.target.value)} />

                <label htmlFor="t2">T2</label>
                <input type="number" id="t2" value={t2} onChange={(e) => setT2(e.target.value)} />

                <label htmlFor="n1">N1</label>
                <input type="number" id="n1" value={n1} onChange={(e) => setN1(e.target.value)} />

                <label htmlFor="n2">N2</label>
                <input type="number" id="n2" value={n2} onChange={(e) => setN2(e.target.value)} />

                <label htmlFor="n3">N3</label>
                <input type="number" id="n3" value={n3} onChange={(e) => setN3(e.target.value)} />

                <button type="submit">Cadastrar</button>
            </form>
        </>
    );
}