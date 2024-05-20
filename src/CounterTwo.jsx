import { useState } from 'react';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };
  return { count, incrementar };
};

const CounterTwo = () => {
  const { count, incrementar } = Counter();
  return (
    <div>
      <h1>Counter Hola Mundo</h1>

      <p>{count}</p>
      <button onClick={incrementar}>Presiona</button>
    </div>
  );
};

export default CounterTwo;
