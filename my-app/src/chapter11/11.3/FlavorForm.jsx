import { useState } from "react";

function FlavorForm() {
  const [value, setValue] = useState('strawberry');
  const handleChange = e => setValue(e.target.value);
  const handleSubmit = () => alert(`Your Choise is ${value} flavor`);

  return (
    <>
      <label>
        Please choose your favorite flavor.
        <select value={value} onChange={handleChange}>
          <option value="apple">Apple</option>
          <option value="strawberry">Strawberry</option>
          <option value="grape">Grape</option>
          <option value="orange">Orange</option>
        </select>
      </label>
      <button type="button" onClick={handleSubmit}>submit</button>
    </>
  );
}

export default FlavorForm;