// src/ConectaAPI.jsx

import React, { useState } from "react";

export default function ConectaAPI() {
  const [user, setUser] = useState(null);
  const [advice, setAdvice] = useState("");
  const [feriados, setFeriados] = useState([]);

  const buscarUsuario = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    setUser(data.results[0]);
  };

  const buscarConselho = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  };

  const buscarFeriados = async () => {
    const res = await fetch(
      "https://brasilapi.com.br/api/feriados/v1/2026"
    );
    const data = await res.json();
    setFeriados(data);
  };

  return (
    <div>
      <h1>Conecta API</h1>

      <button onClick={buscarUsuario}>Usuário</button>
      <button onClick={buscarConselho}>Conselho</button>
      <button onClick={buscarFeriados}>Feriados</button>

      {user && (
        <div>
          <h2>Usuário</h2>
          <img src={user.picture.medium} alt="" />
          <p>{user.name.first} {user.name.last}</p>
        </div>
      )}

      {advice && (
        <div>
          <h2>Conselho</h2>
          <p>{advice}</p>
        </div>
      )}

      {feriados.map((f, i) => (
        <p key={i}>{f.date} - {f.name}</p>
      ))}
    </div>
  );
}