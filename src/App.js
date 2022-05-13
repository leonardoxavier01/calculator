import React, { useState } from 'react';
import './App.css';
import keypad from './services/keypadData.js';

const App = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult('');
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult('Erro de operação');
    }
  };

  const checkFunction = (condition) => {
    return condition == 'handleClick'
      ? handleClick
      : condition == 'clear'
      ? clear
      : condition == 'backspace'
      ? backspace
      : calculate;
  };

  return (
    <>
      <div className="container">
        <form>
          <input type="text" onChange={(e) => e.target.value} value={result} />
        </form>
        <div className="keypad">
          {keypad.map((key) => (
            <button
              className={key.lightStyle ? 'highligth' : ''}
              name={key.value}
              onClick={checkFunction(key.function)}
              id={key.greaterWidth}
              key={key.id}
            >
              {key.value}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
