import styled from "styled-components";

const StyledButton = styled("button")`
  box-shadow: 0px 0px 10px rgb(0 0 0 / 8%);
  background: transparent;
  border: none;
  border-radius: 5px;
  width: 200px;
  cursor: pointer;
  & > img {
    width: 100%;
  }
  &:hover {
    box-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
  }
`;

const ModelCard = ({ photo, make, model, price, onClick }) => {
  const caption = `Price: ${price}`;
  const alt = `${make} - ${model}`;

  console.log(photo, make, model, price);

  return (
    <StyledButton onClick={onClick} aria-label={alt}>
      <h3>{alt}</h3>
      <img src={photo} alt={alt} />
      <p>{caption}</p>
    </StyledButton>
  );
};

export default ModelCard;
