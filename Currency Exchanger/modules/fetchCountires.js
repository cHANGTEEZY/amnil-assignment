const getCountries = async () => {
  const response = await fetch("./data/countries.json");
  const countires = await response.json();
};

export default getCountries;
