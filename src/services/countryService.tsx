import axios from "axios";

const API_URL = "https://random-data-api.com/api/v2";

const getCountryNames = async (size: string) => {
  const config = {
    params: {
      size: size,
    },
  };
  const response = await axios.get(API_URL + "/addresses", config);

  return response.data.map((x: { country: string }) => x.country);
};

const countryService = {
  getCountryNames,
};

export default countryService;
