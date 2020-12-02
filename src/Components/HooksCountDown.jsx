import React, { useState, useEffect } from "react";
import { Badge, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CountDown = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((preCount) => preCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
    //It should be [count] but, as preCount is maintained, it can be empty
  }, []);

  return (
    <>
      <div>
        <Alert variant="success">
          <Alert.Heading>Your Count down starts ?!</Alert.Heading>
        </Alert>
      </div>
      <div>
        <center>
          <Button variant="primary">
            In seconds <Badge variant="light">{count}</Badge>
            <span className="sr-only">Tick..Tick</span>
          </Button>
        </center>
      </div>
    </>
  );
};

export default CountDown;
