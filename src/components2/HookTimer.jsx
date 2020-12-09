import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((preTimer) => preTimer + 1);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      Count Timer - {timer}
      <br />
      <br />
      <button onClick={() => clearInterval(timerRef.current)}>
        Pause Timer
      </button>
    </div>
  );
};

export default Timer;
