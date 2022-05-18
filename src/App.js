import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAlert } from "react-alert";
import ModelsContainer from "./components/ModelsContainer/ModelsContainer";
import CarInfo from "./components/CarInfo/CarInfo";
import FilterInput from "./components/FilterInput/FilterInput";
import useRequest from "./hooks/useRequest";
import Spinner from "./components/Spinner/Spinner";
import { getCarById, filterData } from "./utils/dataManagement";

const AppName = styled("h3")`
  margin: 20px;
`;

const StyledHeader = styled("header")`
  display: flex;
  column-gap: 20px;
  justify-content: center;
  padding: 20px;
  background-color: #eaeef1;
`;

const App = () => {
  const [cars, setCars] = useState([]);
  const [selectedSort, setSelectedSort] = useState("price");
  const [color, setColor] = useState("");
  const [selectedCard, setSelectedCard] = useState("");

  const alert = useAlert();

  const { data, isLoading, error } = useRequest(process.env.REACT_APP_CARS_API);

  useEffect(() => {
    setCars(data);
    // eslint-disable-next-line
  }, [JSON.stringify(data)]);

  const onOptionChangeHandler = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <>
      {selectedCard ? (
        <CarInfo
          carData={getCarById(cars, selectedCard)}
          onSelectedCard={setSelectedCard}
        />
      ) : (
        <main>
          <AppName>Vehicles App</AppName>
          <StyledHeader>
            <label>
              range
              <input
                type="radio"
                value="range"
                checked={selectedSort === "range"}
                onChange={onOptionChangeHandler}
              />
            </label>
            <label>
              price
              <input
                type="radio"
                value="price"
                checked={selectedSort === "price"}
                onChange={onOptionChangeHandler}
              />
            </label>
            <FilterInput onColorChange={setColor} />
          </StyledHeader>
          {error && alert.error("Something was wrong!")}
          <ModelsContainer
            modelCardsList={filterData(cars, color, selectedSort)}
            onSelectedCard={setSelectedCard}
          />
          {isLoading && <Spinner />}
        </main>
      )}
    </>
  );
};

export default App;
