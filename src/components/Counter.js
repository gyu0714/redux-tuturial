import React from 'react';

const Counter = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={increaseAsync}>+</button>
        <button onClick={decreaseAsync}>-</button>
      </div>
    </div>
  );
};

export default Counter;
