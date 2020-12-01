import React, { useState } from "react";

const Hooks = () => {
  const initialVal = 0;
  const [count, setCount] = useState(initialVal);

  const [name, setName] = useState({ firstName: "", lastName: "" });

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((preCount) => preCount + 1);
    }
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount((preCount) => preCount + 1);
          }}
        >
          Incrment 1
        </button>
        <h3> {count}</h3>
        <button onClick={incrementFive}>Increment 5</button>
        <button
          onClick={() => {
            setCount((preCount) => (preCount = initialVal));
          }}
        >
          Reset
        </button>
      </div>
      <br />
      <br />
      {/* Hooks involving objects */}
      <div>
        <form>
          <input
            type="text"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
          />
          <input
            type="text"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          />
        </form>

        <h2>{name.firstName}</h2>
        <h2>{name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </div>
    </>
  );
};

export default Hooks;
