import * as yup from "yup";

const updateUserShape = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
  email: yup.string().email("invalid email"),
  isAdm: yup.boolean(),
  isActive: yup.boolean(),
  createdAt: yup.string(),
});

export { updateUserShape };
