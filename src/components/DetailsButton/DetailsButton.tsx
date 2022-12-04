import * as Styles from "./DetailsButton.styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { setDetails } from "../../features/country/countrySlice";
import { ICountryState } from "../../shared/types";
import countryDetailsService from "../../services/countryDetailsService";

const DetailsButton = () => {
  const dispatch: AppDispatch = useDispatch();
  const { countries }: ICountryState = useSelector(
    (state: RootState) => state.countries
  );

  const handleClick = () => {
    countryDetailsService
      .getDetailsOfCountries(countries)
      .then((data) => dispatch(setDetails(data)));
    //dispatch(setDetails(countryDetails));
  };
  return (
    <Styles.DetailsButton
      onClick={handleClick}
      color="primary"
      variant="contained"
    >
      Show details
    </Styles.DetailsButton>
  );
};

export default DetailsButton;
