'use client';

import { useState } from 'react';

export default function JurosCompostos() {
  const [capital, setCapital] = useState('');
  const [taxa, setTaxa] = useState('');
  const [tempo, setTempo] = useState('');
  const [resultado, setResultado] = useState(null);

  function calcular() {
    const C = Number(capital);
    const i = Number(taxa) / 100;
    const t = Number(tempo);

    if (C <= 0 || i < 0 || t <= 0) {
      alert('Preencha os campos corretamente!');
      return;
    }

    const montante = C * Math.pow(1 + i, t);
    const juros = montante - C;

    setResultado({
      montante: montante.toFixed(2),
      juros: juros.toFixed(2),
    });
  }

  return (
    <main>
      <h1>Calculadora de Juros Compostos</h1>

      <div>
        <label>Capital inicial:</label>
        <input
          type="number"
          placeholder="Digite o capital"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
        />
      </div>

      <div>
        <label>Taxa de juros (%):</label>
        <input
          type="number"
          placeholder="Digite a taxa"
          value={taxa}
          onChange={(e) => setTaxa(e.target.value)}
        />
      </div>

      <div>
        <label>Tempo:</label>
        <input
          type="number"
          placeholder="Digite o tempo"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
        />
      </div>

      <button onClick={calcular}>
        Calcular
      </button>

      {resultado && (
        <div>
          <h2>Resultado</h2>

          <p>
            Montante: R$ {resultado.montante}
          </p>

          <p>
            Juros: R$ {resultado.juros}
          </p>
        </div>
      )}
    </main>
  );
}