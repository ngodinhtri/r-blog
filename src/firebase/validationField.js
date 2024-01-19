import * as Yup from "yup";

export const validationField = {
  fullname: Yup.string()
    .required("Required")
    .max(20, "Must be 20 characters or less!"),
  email: Yup.string().email("Email is invalid").required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
      "Password must contain 0-9, A-z & special letter. Length 8 - 16",
    ),
};
