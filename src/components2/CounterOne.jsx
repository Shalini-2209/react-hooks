import React from "react";
import CounterTwo from "../Components2/CounterTwo";
import useCustom from "./useCustom";

const CounterOne = () => {
  const [count, increment, reset] = useCustom();

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>

      <CounterTwo />
    </div>
  );
};

export default CounterOne;
