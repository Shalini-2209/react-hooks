import React from "react";
import useCustom from "./useCustom";

const CounterOne = () => {
  const [count, increment, reset] = useCustom();

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>Increment Five</button>
      <button onClick={reset}>Reset Five</button>
    </div>
  );
};

export default CounterOne;
