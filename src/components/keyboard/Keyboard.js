import Button from '../button/Button';
import Boton from '../button/Button';
import './Keyboard.css';

const Keyboard = ({addInput, clear, calculate}) => {

  return (
    <>
        <div className='calculator-row'>
          <Boton handleClick={addInput}>1</Boton>
          <Boton handleClick={addInput}>2</Boton>
          <Boton handleClick={addInput}>3</Boton>
          <Boton handleClick={addInput}>+</Boton>
        </div>
        <div className='calculator-row'>
          <Boton handleClick={addInput}>4</Boton>
          <Boton handleClick={addInput}>5</Boton>
          <Boton handleClick={addInput}>6</Boton>
          <Boton handleClick={addInput}>-</Boton>
        </div>
        <div className='calculator-row'>
          <Boton handleClick={addInput}>7</Boton>
          <Boton handleClick={addInput}>8</Boton>
          <Boton handleClick={addInput}>9</Boton>
          <Boton handleClick={addInput}>*</Boton>
        </div>
        <div className='calculator-row'>
          <Boton handleClick={calculate}>=</Boton>
          <Boton handleClick={addInput}>0</Boton>
          <Boton handleClick={addInput}>.</Boton>
          <Boton handleClick={addInput}>/</Boton>
        </div>
        {/* mejorar*/}
        <div className='calculator-row'>
          <Button handleClick={clear}>Clear</Button>
        </div>
    </>
  )
}

export default Keyboard;