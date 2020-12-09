import { useEffect } from "react";

const useTitle = (count) => {
  useEffect(() => {
    document.title = `Count - ${count}`;
  });
};

export default useTitle;
