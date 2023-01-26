import { useState } from "react";

function useInput(initValue) {
  const [inputValue, setInputValue] = useState(initValue);
  const handleChange = (e) => setInputValue(e.target.value);
  // const handleSubmit = () => {
  //   alert(inputValue);
  //   setInputValue('');
  // };
  const reset = () => setInputValue('');
  return [inputValue, handleChange, reset];
}

export default useInput;