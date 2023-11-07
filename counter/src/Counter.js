import React, { useState, useEffect } from 'react';
import './Counter.css'

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [isCountTooHigh, setCountTooHigh] = useState(false);
  const [isCountTooLow, setCountTooLow] = useState(false);

  useEffect(() => {
    if (count > 10) {
      setCountTooHigh(true);
    } 
    else if (count < 0){
        setCountTooLow(true)
    }
    else {
      setCountTooHigh(false);
      setCountTooLow(false);
    }
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () =>{
    setCount(count - 1)
  }

  return (
    <div className='counter'>
      <h1>Counter: {count}</h1>
      <div className='sub-container'>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      </div>
      {isCountTooHigh && <p className='message'>Count is too high!</p>}
      {isCountTooLow && <p className='message'>Count is too Low!</p>}
    </div>
  );
}

export default Counter;
