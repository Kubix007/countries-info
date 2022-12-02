import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import * as Styles from "./InputForm.styles";

const validationSchema = yup.object({
  amount: yup
    .number()
    .typeError("To nie jest liczba ;)")
    .required("Aby przejść dalej pole nie może być puste ;)")
    .min(5, "Liczba chyba nie jest większa niż 5 ;)")
    .max(20, "Liczba chyba nie jest mniejsza niż 20 ;)"),
});

const InputForm = () => {
  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="amount"
        name="amount"
        label="Liczba państw"
        value={formik.values.amount}
        onChange={formik.handleChange}
        error={formik.touched.amount && Boolean(formik.errors.amount)}
        helperText={formik.touched.amount && formik.errors.amount}
        InputProps={{
          style: { backgroundColor: "white" },
        }}
      />
      <Styles.SubmitButton variant="contained" fullWidth type="submit">
        Zatwierdź
      </Styles.SubmitButton>
    </form>
  );
};

export default InputForm;
