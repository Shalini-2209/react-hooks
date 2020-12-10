import { useState } from "react";

const useForm = (initialState) => {
  const [value, setValue] = useState(initialState);

  const reset = () => {
    setValue(initialState);
  };

  const bindInput = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, reset, bindInput];
};

export default useForm;
