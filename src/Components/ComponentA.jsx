import React from "react";
import ComponentB from "./ComponentB";
export const UserContext = React.createContext();
export const WishContext = React.createContext();
export const methodContext = React.createContext();

// useContext example - (instead of props)
const ComponentA = () => {
  return (
    <div>
      <UserContext.Provider value={"Welcomed"}>
        <WishContext.Provider value={"Good morning"}>
          <methodContext.Provider value="Enjoy your day">
            <ComponentB />
          </methodContext.Provider>
        </WishContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default ComponentA;
