import * as yup from "yup";

const loginUserSchema = yup.object().shape({
  email: yup
    .string()
    .email("invalid email")
    .required("field email is required"),
  password: yup.string().required().required("field password is required"),
});

export { loginUserSchema };
