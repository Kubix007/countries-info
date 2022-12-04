import { Grid } from "@mui/material";
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
          <Styles.Header variant="h1">Losowanie państw</Styles.Header>
        </Grid>
        <Grid item>
          <Styles.SubHeader variant="h2">
            Wprowadź ile razy chcesz wylosować państwo:
          </Styles.SubHeader>
        </Grid>
        <Grid item>
          <InputForm />
        </Grid>
      </Grid>
    </Styles.LayoutContainer>
  );
};

export default Layout;
