import styled from "styled-components";

const Container = styled("div")`
  margin: 40px;
`;

const InfoContainer = styled("div")`
  display: flex;
  justify-content: space-around;
`;

const TextInfoContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled("button")`
  background: transparent;
  border: none;
  cursor: pointer;
  background-color: #eaeef1;
  &:hover {
    box-shadow: 0px 0px 4px rgb(0 0 0 / 30%);
  }
`;

const CarInfo = ({ carData, onSelectedCard }) => {
  const {
    photo,
    make,
    model,
    price,
    range: { unit, distance },
    colors,
  } = carData;

  const modelText = `Model ${model}`;

  const onClickHandler = () => {
    onSelectedCard("");
  };

  return (
    <Container>
      <StyledButton onClick={onClickHandler}>Home</StyledButton>
      <div>
        <h3>{modelText}</h3>
        <InfoContainer>
          <img width="500px" src={photo} alt={modelText} />
          <TextInfoContainer>
            <p>
              <b>
                <span>Made by </span>
                {make}
              </b>
            </p>
            <p>
              <span>
                <b>Price: </b>
              </span>
              {price}
            </p>
            <p>
              <span>
                <b>Range: </b>
              </span>
              {`${distance} ${unit}`}
            </p>
            <p>
              <span>
                <b>Colors: </b>
              </span>
              {colors.join(", ")}
            </p>
          </TextInfoContainer>
        </InfoContainer>
      </div>
    </Container>
  );
};

export default CarInfo;
