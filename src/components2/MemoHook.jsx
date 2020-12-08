import React, { useMemo, useState } from "react";

const Memo = () => {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);

  const incrementOne = () => {
    setOne((old) => old + 1);
  };

  const incrementTwo = () => {
    setTwo((old) => old + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return one % 2 === 0;
  }, [one]);

  return (
    <div>
      <center>
        {one}
        <button onClick={incrementOne}>Counter 1</button>

        <span>{isEven ? "even" : "odd"}</span>
        <br />
        <br />
        {two}
        <button onClick={incrementTwo}>Counter 2</button>
      </center>
    </div>
  );
};

export default Memo;
