import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().nullable().required("Required"),
  lastName: Yup.string().nullable().required("Required"),
  email: Yup.string().nullable().required("Required"),
  password: Yup.string().nullable().required("Required"),
  confirmPassword: Yup.string().nullable().required("Required"),
});
