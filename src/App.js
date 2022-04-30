
import React, { useState } from 'react';
import Display from './components/display/Display';
import Keyboard from './components/keyboard/Keyboard';
import { evaluate } from 'mathjs';
import './App.css';
import Logo from './calculator.png';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const clear = () => {
    setInput('');
  };

  const calculate = () => {
    if(input) {
      setInput(evaluate(input));
    } 
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calculator</h1>
        {input ? 
        <img src={Logo} alt='calculator logo' className='logo'/> 
        : 
        <p>Please enter values to perform calculations</p>}
      </header>
      <div className='calculator-container'>
        <Display input={input}/>
        <Keyboard addInput={addInput} clear={clear} calculate={calculate}/>
      </div>
    </div>
  );
}

export default App;
