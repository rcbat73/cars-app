const extractValue = (value) => value.split(" ")[0];
const compare = (value1, value2) => {
  if (value1 < value2) {
    return -1;
  }
  if (value1 > value2) {
    return 1;
  }
  return 0;
};

export const sortData = (data, sortingValue) => {
  return sortingValue === "range"
    ? data.sort((a, b) => {
        const distanceA = Number(a.range.distance);
        const distanceB = Number(b.range.distance);
        return compare(distanceA, distanceB);
      })
    : data.sort((a, b) => {
        const priceA = Number(extractValue(a.price));
        const priceB = Number(extractValue(b.price));
        return compare(priceA, priceB);
      });
};

export const filterData = (data, filterValue, sortingValue) => {
  const filteredData = data.reduce(
    (
      acc,
      { id, photo, make, model, price, colors, range: { unit, distance } }
    ) => {
      return colors.includes(filterValue) || !filterValue
        ? [
            ...acc,
            {
              id,
              make,
              model,
              range: {
                unit,
                distance,
              },
              colors: [...colors],
              price,
              photo,
            },
          ]
        : [...acc];
    },
    []
  );
  const sortedData = sortData(filteredData, sortingValue);
  return sortedData;
};

export const getCarById = (data, id) => {
  return data.find((car) => car.id === id);
};
