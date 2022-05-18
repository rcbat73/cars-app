import { useState } from "react";

const FilterInput = ({ onColorChange }) => {
  const [value, setValue] = useState("");
  const onChangeHandler = (event) => {
    setValue(event.target.value);
    onColorChange(event.target.value);
  };

  return <input value={value} onChange={onChangeHandler} />;
};

export default FilterInput;
