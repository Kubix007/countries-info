import axios from "axios";

const API_URL = "https://random-data-api.com/api/v2";

const getCountries = async (size: string) => {
  const config = {
    params: {
      size: size,
    },
  };
  const response = await axios.get(API_URL + "/addresses", config);

  return response.data;
};

const countryService = {
  getCountries,
};

export default countryService;
