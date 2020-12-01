import React, { useState, useEffect } from "react";

const HookThree = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", logMouse);
    console.log("Updated");

    return () => {
      window.removeEventListener("mousemove", logMouse);
      console.log("Unmounted..");
    };
  }, []);

  const logMouse = (e) => {
    setX(e.clientX);
    setY(e.clientY);
    console.log("logged");
  };

  return (
    <>
      <div>
        X: {x} Y: {y}
      </div>
    </>
  );
};

export default HookThree;
