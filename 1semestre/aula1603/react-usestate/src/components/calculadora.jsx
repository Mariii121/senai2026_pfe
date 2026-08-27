// /components/Calculadora.js
import React, { useState } from 'react';

export default function Calculadora({ título }) {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const validar = (n1, n2, operacao) => {
    if (n1 === '' || (n2 === '' && operacao !== 'raiz')) return false;
    if (Number(n1) <= 0 || (Number(n2) <= 0 && operacao !== 'raiz')) return false;
    return true;
  };

  const somar = () => validar(num1, num2, 'soma') && setResultado(Number(num1) + Number(num2));
  const subtrair = () => validar(num1, num2, 'subtracao') && setResultado(Number(num1) - Number(num2));
  const multiplicar = () => validar(num1, num2, 'multiplicacao') && setResultado(Number(num1) * Number(num2));
  const dividir = () => validar(num1, num2, 'divisao') && setResultado(Number(num1) / Number(num2));
  const potencia = () => validar(num1, num2, 'potencia') && setResultado(Math.pow(Number(num1), Number(num2)));
  const raizQuadrada = () => validar(num1, '', 'raiz') && setResultado(Math.sqrt(Number(num1)));
  const limpar = () => { setNum1(''); setNum2(''); setResultado(''); };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{título}</h1>

      <div>
        <label>Número 1</label><br />
        <input type="number" value={num1} onChange={e => setNum1(e.target.value)} />
      </div>

      <div>
        <label>Número 2</label><br />
        <input type="number" value={num2} onChange={e => setNum2(e.target.value)} />
      </div>

      <div style={{ marginTop: '10px' }}>
        <button onClick={somar}>+</button>
        <button onClick={subtrair}>-</button>
        <button onClick={multiplicar}>×</button>
        <button onClick={dividir}>÷</button>
        <button onClick={potencia}>xʸ</button>
        <button onClick={raizQuadrada}>√</button>
        <button onClick={limpar}>C</button>
      </div>

      <h2>Resultado: {resultado}</h2>
    </div>
  );
}