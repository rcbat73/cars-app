import styled from "styled-components";
import ModelCard from "../ModelCard/ModelCard";

const CardsContainer = styled("div")`
  display: grid;
  gap: 20px;
  grid-template-columns: auto;
  justify-content: center;
  margin-top: 40px;
  @media (min-width: 465px) {
    grid-template-columns: auto auto;
  }
`;

const ModelsContainer = ({ modelCardsList = [], onSelectedCard }) => {
  const onClickCard = (id) => () => {
    onSelectedCard(id);
  };

  return (
    <CardsContainer>
      {modelCardsList.map(({ id, photo, make, model, price }) => (
        <ModelCard
          key={id}
          id={id}
          photo={photo}
          make={make}
          model={model}
          price={price}
          onClick={onClickCard(id)}
        />
      ))}
    </CardsContainer>
  );
};

export default ModelsContainer;
