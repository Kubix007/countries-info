import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import * as Styles from "./InputForm.styles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { getCountryNames } from "../../features/country/countrySlice";

const validationSchema = yup.object({
  amount: yup
    .number()
    .typeError("This is not a number ;)")
    .required("To move on, the field must not be empty ;)")
    .min(5, "The number is probably not more than 5 ;)")
    .max(20, "The number is probably not less than 20 ;)"),
});

const InputForm = () => {
  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(getCountryNames(values.amount));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="amount"
        name="amount"
        label="Number of countries"
        value={formik.values.amount}
        onChange={formik.handleChange}
        error={formik.touched.amount && Boolean(formik.errors.amount)}
        helperText={formik.touched.amount && formik.errors.amount}
        InputProps={{
          style: { backgroundColor: "white" },
        }}
      />
      <Styles.SubmitButton variant="contained" fullWidth type="submit">
        Confirm
      </Styles.SubmitButton>
    </form>
  );
};

export default InputForm;
