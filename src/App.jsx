import { useState } from 'react';
import './App.css';

// Componente Likes

const Likes = () => {
  const [likes, setLikes] = useState(0);

  const increase = () => {
    setLikes(likes + 1);
  };
  const decrease = () => {
    setLikes(likes - 1);
  };
  const reset = () => setLikes(0);

  return {likes, increase, decrease, reset};
};

const App = () => {
  const { likes, increase, decrease, reset } = Likes();
  return (
    <div>
      <p>Estos son los likes {likes}</p>
      <button onClick={increase}>Suma</button>
      <button onClick={decrease}>Resta</button>
      <button onClick={reset}>Comienza</button>
    </div>
  );
};

export default App;
