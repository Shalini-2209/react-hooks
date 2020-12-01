import React, { useState, useEffect } from "react";
import HookThree from "./HooksThree";

const Toggle = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>;
      {display && <HookThree />}
    </div>
  );
};

export default Toggle;
