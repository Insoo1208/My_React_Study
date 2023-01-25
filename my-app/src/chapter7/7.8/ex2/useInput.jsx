import { useState } from "react";

function useInput(initValue) {
  const [inputValue, setInputValue] = useState(initValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return [inputValue, handleChange];
}

export default useInput;