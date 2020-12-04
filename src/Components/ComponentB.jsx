import React, { useContext } from "react";
import { UserContext, WishContext } from "./ComponentA";

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
