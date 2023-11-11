import * as Yup from "yup";
import { passwordRegExp } from "../../../utils";

export const ValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password needs to be a minimum of 8 numbers")
    .matches(
      passwordRegExp,
      "Password must contain a capital letter, small letter and a special character"
    )
    .nullable()
    .required("Required"),
  confirmPassword: Yup.string()
    .nullable()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Password does not match"),
});
