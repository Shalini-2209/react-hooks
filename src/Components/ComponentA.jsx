import React from "react";
import ComponentB from "./ComponentB";
export const UserContext = React.createContext();
export const WishContext = React.createContext();

// useContext example - (instead of props)
const ComponentA = () => {
  return (
    <div>
      <UserContext.Provider value={"Welcomed"}>
        <WishContext.Provider value={"Good morning"}>
          <ComponentB />
        </WishContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default ComponentA;
