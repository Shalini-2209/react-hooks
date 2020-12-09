import { useState } from "react";

const useCustom = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    for (let i = 0; i < 5; i++) {
      setCount((preCount) => preCount + 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return [count, increment, reset];
};

export default useCustom;
