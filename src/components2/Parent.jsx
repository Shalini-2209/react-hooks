import React, { useState, useCallback } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";

const Parent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(30000);

  const incrementAge = useCallback(() => {
    setAge((preAge) => preAge + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary((old) => old + 10000);
  }, [salary]);

  const resetButtons = () => {
    setSalary(30000);
    setAge(25);
  };

  return (
    <>
      <center>
        <div>
          <Title />
        </div>
        <div>
          <Count text="Age" count={age} />
          <Button handleClick={incrementAge} text="Increment Age" />
          <Count text="Salary" count={salary} />
          <Button handleClick={incrementSalary} text="Increment Salary" />
          <button onClick={resetButtons}>Reset</button>
        </div>
      </center>
    </>
  );
};

export default Parent;
