import React from 'react';
import { kea, useActions, useValues  } from 'kea'
import logic from './logic'

const Counter = () => {
  const { counter } = useValues(logic)
  const { increment } = useActions(logic)
  const { decrement } = useActions(logic)
  return (
    <>
      {/* <p>{counter}</p>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>decreament</button> */}
    </>
  );
};

export default Counter;
