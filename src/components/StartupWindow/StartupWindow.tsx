import { Grid } from "@mui/material";
import InputForm from "../InputForm";
import * as Styles from "./StartupWindow.styles";

const StartupWindow = () => {
  return (
    <>
      <Grid item>
        <Styles.Header variant="h1">Country Draw</Styles.Header>
      </Grid>
      <Grid item>
        <Styles.SubHeader variant="h2">
          Enter how many times you want to draw a country:
        </Styles.SubHeader>
      </Grid>
      <Grid item>
        <InputForm />
      </Grid>
    </>
  );
};

export default StartupWindow;
