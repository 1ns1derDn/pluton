import * as yup from "yup";

export const schemeFeedback = yup.object({
  feedback: yup.string().required("Поле обязательно для заполнения"),
});
