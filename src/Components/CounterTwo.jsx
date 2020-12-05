import React, { useReducer } from "react";

const initialState = { firstCounter: 0, secondCounter: 10 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - 1 };
    case "increment5":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement5":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + 1 };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - 1 };

    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <center>
        <div>Counter 1 value is {count.firstCounter}</div>
        <div>Counter 2 value is {count.secondCounter}</div>
        <br /> <br />
        <div>
          <button onClick={() => dispatch({ type: "increment" })}>
            Add Counter1
          </button>
          <button onClick={() => dispatch({ type: "decrement" })}>
            Subtract Counter1
          </button>
          <button onClick={() => dispatch({ type: "increment5", value: 5 })}>
            Add 5 in Counter1
          </button>
          <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
            Subtract 5 in Counter1
          </button>
          <br /> <br />
          <div>
            <button onClick={() => dispatch({ type: "increment2" })}>
              Add Counter2
            </button>
            <button onClick={() => dispatch({ type: "decrement2" })}>
              Subtract Counter2
            </button>
          </div>
          <br />
          <button onClick={() => dispatch({ type: "reset" })}>Clear</button>
        </div>
      </center>
    </>
  );
};

export default CounterTwo;
