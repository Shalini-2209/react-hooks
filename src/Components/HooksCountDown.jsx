import React, { useState, useEffect } from "react";
import { Badge, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CountDown = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

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
            <span className="sr-only">unread messages</span>
          </Button>
        </center>
      </div>
    </>
  );
};

export default CountDown;
