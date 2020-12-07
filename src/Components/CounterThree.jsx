import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <>
      <center>
        <div>Countervalue is {count}</div>
        <div>
          <button onClick={() => dispatch("increment")}>Add</button>
          <button onClick={() => dispatch("decrement")}>Subtract</button>
          <button onClick={() => dispatch("reset")}>Clear</button>
        </div>

        <div>CounterTwo value is {countTwo}</div>
        <div>
          <button onClick={() => dispatchTwo("increment")}>Add</button>
          <button onClick={() => dispatchTwo("decrement")}>Subtract</button>
          <button onClick={() => dispatchTwo("reset")}>Clear</button>
        </div>
      </center>
    </>
  );
};

export default CounterThree;
