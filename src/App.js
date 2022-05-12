import React, { useState } from 'react';
import './App.css';
import keypad from './keypadData.js';

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

  return (
    <>
      <div className="container">
        <form>
          <input type="text" onChange={(e) => e.target.value} value={result} />
        </form>
        <div className="keypad">
          <button className="highligth" id="clear" onClick={clear}>
            Clear
          </button>
          <button className="highligth" onClick={backspace}>
            C
          </button>
          {keypad.map((key, index) => (
            <button className={key.class} name={key.value} onClick={handleClick} key={index}>
              {key.value}
            </button>
          ))}
          <button className="highligth" onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
