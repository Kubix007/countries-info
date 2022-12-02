import { Grid, Typography } from "@mui/material";
import InputForm from "../InputForm";
import * as Styles from "./Layout.styles";

const Layout = () => {
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
        <Grid item>
          <Typography
            variant="h1"
            fontSize="4em"
            align="center"
            fontFamily="Montserrat-SemiBold"
          >
            Generator państw
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h2"
            fontSize="2em"
            align="center"
            fontFamily="Montserrat-Regular"
          >
            Wprowadź ile razy chcesz wygenerować państwo:
          </Typography>
        </Grid>
        <Grid item>
          <InputForm />
        </Grid>
      </Grid>
    </Styles.LayoutContainer>
  );
};

export default Layout;
