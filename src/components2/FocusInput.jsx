import React, { useRef, useEffect } from "react";

const Focus = () => {
  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={focusRef} />
    </div>
  );
};

export default Focus;
