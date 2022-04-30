import React from 'react';
import './Button.css'; 

const Button = ({children, handleClick}) => {

  /* Returns true if value is an operator */
  const isOperator = (value) => {
    return isNaN(value) && (value !== '.') && (value !== '=') && (value !== 'Clear');
  };

  const isClear = (value) => {
    return value === 'Clear';
  };

  return (
    <button 
    className={`button-container ${isOperator(children) ? 'operator' : isClear(children) ? 'clear' : ''}`.trimEnd()} 
    onClick={() => handleClick(children)}>
        {children}
    </button>
  )
}

export default Button;