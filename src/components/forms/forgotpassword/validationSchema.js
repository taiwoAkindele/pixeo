import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  email: Yup.string().nullable().required("Required"),
});
