import React from "react";

function Button({ handleClick, text }) {
  console.log("Rendering button - ", text);
  return <button onClick={handleClick}>{text}</button>;
}

export default React.memo(Button);
