import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Saludo from './components/saludo';

const App = () => {
  const [contador, setContador] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Hola, <Saludo nombre="Thiago"/> </h1>
        <button onClick={() => setContador((contador) => contador + 1)}>
          Contador: {contador}
        </button>
      </header>
    </div>
  );
}

export default App;