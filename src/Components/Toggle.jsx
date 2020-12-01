import React, { useState, useEffect } from "react";
import HookThree from "./HooksThree";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Toggle = () => {
  const [display, setDisplay] = useState(true);

  return (
    //   Clean up component === componentWillUnmount
    <div>
      <center>
        <h3>View Mouse coordinates</h3>
        <br />
        <br />
        <Button variant="primary" onClick={() => setDisplay(!display)}>
          Toggle display
        </Button>
        <br />
        <br />
        {/* <button onClick={() => setDisplay(!display)}>Toggle display</button>; */}
        {display && <HookThree />}
      </center>
    </div>
  );
};

export default Toggle;
