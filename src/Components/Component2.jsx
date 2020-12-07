import React, { useContext } from "react";
import { CountContext } from "./Component1";

const ComponentTwo = () => {
  const countContext = useContext(CountContext);
  return (
    <>
      <center>
        <div>Counter value is {countContext.countState}</div>
        <div>
          <button onClick={() => countContext.dispatcher("increment")}>
            Add
          </button>
          <button onClick={() => countContext.dispatcher("decrement")}>
            Subtract
          </button>
          <button onClick={() => countContext.dispatcher("reset")}>
            Clear
          </button>
        </div>
      </center>
    </>
  );
};

export default ComponentTwo;
