import { Grid } from "@mui/material";
import InputForm from "../InputForm";
import * as Styles from "./StartupWindow.styles";

const StartupWindow = () => {
  return (
    <>
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
    </>
  );
};

export default StartupWindow;
