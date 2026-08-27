import { useState, useEffect } from "react";

export default function Aluno(){
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);

    //executa toda vez
    useEffect(() =>{
        console.log(`App renderiado!`);
    })

    //executa na montagem do componente
    useEffect(() =>{
        console.log(`App montado!`);
    },[nome])
      //executa na montagem do componente
    useEffect(() =>{
        console.log(`App montado!`);
    },[idade])

    return(
        <>
        <form action="">
        <input type="text" value={nome} onChange= {(e) => setNome(e.target.value)}/>
        <form action="">
        <input type="text" value={nome} onChange= {(e) => setNome(e.target.value)}/>
        </form>
    )
