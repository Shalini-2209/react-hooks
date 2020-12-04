import React, { useContext } from "react";
import { UserContext, WishContext } from "./ComponentA";
// useContext usage
const ComponentB = () => {
  const user = useContext(UserContext);
  const wish = useContext(WishContext);

  return (
    <div>
      You are {user}
      <br />
      {wish}
    </div>
  );
};

export default ComponentB;
