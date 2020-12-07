import React, { useReducer } from "react";
import ComponentTwo from "./Component2";

export const CountContext = React.createContext();

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

const Component1 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <CountContext.Provider
        value={{ countState: count, dispatcher: dispatch }}
      >
        <ComponentTwo />
      </CountContext.Provider>
    </>
  );
};

export default Component1;
