import React from "react";

const Title = () => {
  console.log("Rendering Title component..");
  return <h3>useCallBack Hooks Example</h3>;
};

export default React.memo(Title);
