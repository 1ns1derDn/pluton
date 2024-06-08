import * as yup from "yup";

export const schemeLogin = yup.object({
  email: yup.string().min(0).required(),
  password: yup.string().min(0).required(),
});
