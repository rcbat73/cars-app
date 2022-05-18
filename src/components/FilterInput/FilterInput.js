import { useState } from "react";
import styled from "styled-components";

const StyledLabel = styled("label")`
  & > input {
    margin-left: 10px;
  }
`;

const FilterInput = ({ onColorChange }) => {
  const [value, setValue] = useState("");
  const onChangeHandler = (event) => {
    setValue(event.target.value);
    onColorChange(event.target.value);
  };

  return (
    <StyledLabel>
      Filter by Color:
      <input value={value} onChange={onChangeHandler} />
    </StyledLabel>
  );
};

export default FilterInput;
