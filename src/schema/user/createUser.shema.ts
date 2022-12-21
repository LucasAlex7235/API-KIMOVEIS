import * as yup from "yup";

const createUserShape = yup.object().shape({
  name: yup.string().min(3).required("field name is required"),
  email: yup
    .string()
    .email("invalid email")
    .required("field email is required"),
  password: yup.string().required().required("field password is required"),
  isAdm: yup.boolean().required("field isAdm is required"),
});

export { createUserShape };
