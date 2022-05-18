import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
`;

const SpinnerWrapper = styled("div")`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${rotate} 1s linear infinite;
`;
const Spinner = () => (
  <SpinnerContainer>
    <SpinnerWrapper />
  </SpinnerContainer>
);

export default Spinner;
