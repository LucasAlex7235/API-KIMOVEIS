import * as yup from "yup";

const createCategoriesSchema = yup.object().shape({
  name: yup.string().required("field name is required"),
});

export { createCategoriesSchema };
