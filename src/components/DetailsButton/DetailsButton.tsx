import * as Styles from "./DetailsButton.styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { setDetails } from "../../features/country/countrySlice";
import countryDetailsService from "../../services/countryDetailsService";
import { ICountryState } from "../../shared/types";
import axios from "axios";

const DetailsButton = () => {
  const dispatch: AppDispatch = useDispatch();
  const { countries }: ICountryState = useSelector(
    (state: RootState) => state.countries
  );

  const getDetails = async (countryName: any) => {
    const config = {
      params: {
        fields: "name,capital,languages,population,flags",
      },
    };
    let API_URL = "https://restcountries.com/v3.1/name";
    let endpoints = [];
    for (let i = 0; i < countryName.length; i++) {
      endpoints.push(`${API_URL}/${countryName[i].name}`);
    }
    axios
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
      )
      .then((data) => dispatch(setDetails(data)));
  };

  const handleClick = () => {
    getDetails(countries);
  };
  return (
    <Styles.DetailsButton
      onClick={handleClick}
      color="primary"
      variant="contained"
    >
      Pokaż szczegóły
    </Styles.DetailsButton>
  );
};

export default DetailsButton;
