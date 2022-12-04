import axios from "axios";

const API_URL = "https://restcountries.com/v3.1/name";

const getDetailsOfCountries = async (name: string) => {
  const config = {
    params: {
      fields: "name,capital,languages,population,flags",
    },
  };
  const response = await axios.get(API_URL + `/${name}`, config);

  return response.data;
};

const countryDetailsService = {
  getDetailsOfCountries,
};

export default countryDetailsService;
