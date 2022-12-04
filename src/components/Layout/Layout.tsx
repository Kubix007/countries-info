import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import * as Styles from "./Layout.styles";
import StartupWindow from "../StartupWindow";
import CountryCard from "../CountryCard";
import { ICountryState } from "../../shared/types";
import CountryCardList from "../CountryCardList";

const Layout = () => {
  const { isLoaded }: ICountryState = useSelector(
    (state: RootState) => state.countries
  );

  return (
    <Styles.LayoutContainer>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        spacing={2}
        marginTop={0}
      >
        {isLoaded ? <CountryCardList /> : <StartupWindow />}
      </Grid>
    </Styles.LayoutContainer>
  );
};

export default Layout;
