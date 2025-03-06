import { useState } from 'react';
import './App.css';

function App() {
  const [base, setBase] = useState('');
  const [exponente, setExponente] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularPotencia = () => {
    setResultado(Math.pow(Number(base), Number(exponente)));
  };

  return (
    <>
      <h1>Calculadora de Potencia</h1>
      <div className="card">
        <input
          type="number"
          placeholder="Base"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        />
        <input
          type="number"
          placeholder="Exponente"
          value={exponente}
          onChange={(e) => setExponente(e.target.value)}
        />
        <button onClick={calcularPotencia}>
          Calcular
        </button>
        {resultado !== null && <p>Resultado: {resultado}</p>}
      </div>
    </>
  );
}

export default App;
