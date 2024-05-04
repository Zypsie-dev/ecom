import * as yup from "yup";

const validations = yup.object().shape({
  email: yup.string().email("Enter a valid email").required("Required field"),
  password: yup
    .string()
    .min(10, "Your password must be at least 10 characters long.")
    .required("Required field"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Required field"),
});

export default validations;
