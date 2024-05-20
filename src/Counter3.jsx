import React, { useState } from 'react';
import './App.css';

const Contador = () => {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <h1>Soy contador mío</h1>
      <p>{numero}</p>
      <button onClick={() => setNumero(numero + 1)}>Cuenta</button>
      <button onClick={() => setNumero(numero - 1)}>Disminuye</button>
      <button onClick={() => setNumero(0)}>Reset</button>
    </div>
  );
};

export default Contador;
