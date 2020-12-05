import React, { useContext } from "react";
import { UserContext, WishContext, methodContext } from "./ComponentA";
// useContext usage
const ComponentB = () => {
  const user = useContext(UserContext);
  const wish = useContext(WishContext);
  const day = useContext(methodContext);

  return (
    <div>
      You are {user}
      <br />
      {wish}
      <br />
      {day}
    </div>
  );
};

export default ComponentB;
