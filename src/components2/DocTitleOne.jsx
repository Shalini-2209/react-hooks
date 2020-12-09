import React, { useState } from "react";
import DocTitleTwo from "./DocTitleTwo";
import useDocTitle from "./useDocTitle";

const DocTitleOne = () => {
  const [count, setCount] = useState(0);

  useDocTitle(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      <DocTitleTwo />
    </div>
  );
};

export default DocTitleOne;
