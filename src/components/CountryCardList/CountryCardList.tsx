import CountryCard from "../CountryCard/CountryCard";
import { Grid } from "@mui/material";
import { ICountryState } from "../../shared/types";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

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
      >
        {countries.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </Grid>
    </Grid>
  );
};

export default CountryCardList;
