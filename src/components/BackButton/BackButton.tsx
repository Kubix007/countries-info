import * as Styles from "./BackButton.style";
import { KeyboardBackspace } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { reset } from "../../features/country/countrySlice";

const BackButton = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    dispatch(reset());
  };
  return (
    <Styles.BackButton
      onClick={handleClick}
      variant="contained"
      startIcon={<KeyboardBackspace />}
    >
      Back
    </Styles.BackButton>
  );
};

export default BackButton;
