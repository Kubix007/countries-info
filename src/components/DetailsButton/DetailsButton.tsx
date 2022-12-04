import * as Styles from "./DetailsButton.styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { setDetails } from "../../features/country/countrySlice";
import countryDetailsService from "../../services/countryDetailsService";
import { ICountryState } from "../../shared/types";

const DetailsButton = () => {
  const dispatch: AppDispatch = useDispatch();
  const { countries }: ICountryState = useSelector(
    (state: RootState) => state.countries
  );

  const handleClick = () => {
    countryDetailsService
      .getDetailsOfCountries(countries[0].name)
      .then((response) => {
        dispatch(setDetails(response));
        console.log(response);
      })
      .catch((error) => console.log(error));
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
