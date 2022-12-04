import CountryCard from "../CountryCard/CountryCard";
import { Grid } from "@mui/material";
import { ICountryState } from "../../shared/types";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import DetailsButton from "../DetailsButton";

const CountryCardList = () => {
  const { countries }: ICountryState = useSelector(
    (state: RootState) => state.countries
  );

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        marginBottom={2}
      >
        {countries.countryNames.map((country) => (
          <CountryCard key={country} name={country} />
        ))}
      </Grid>
      <DetailsButton />
    </Grid>
  );
};

export default CountryCardList;
