import axios from "axios";

const API_URL = "https://restcountries.com/v3.1/name";

const getDetailsOfCountries = async (countryName: any) => {
  const config = {
    params: {
      fields: "name,capital,languages,population,flags",
    },
  };
  let endpoints = [];
  for (let i = 0; i < countryName.length; i++) {
    endpoints.push(`${API_URL}/${countryName[i].name}`);
  }
  return axios
    .all(endpoints.map((endpoint) => axios.get(endpoint, config)))
    .then((data) => data.map((item) => item.data[0]))
    .then((data) =>
      data.map((item) => ({
        name: item.name.common,
        languages: Object.values(item.languages),
        population: item.population,
        capital: item.capital[0],
        flags: item.flags.svg,
      }))
    );
};

const countryDetailsService = {
  getDetailsOfCountries,
};

export default countryDetailsService;
