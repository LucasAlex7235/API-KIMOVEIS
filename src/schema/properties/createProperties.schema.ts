import * as yup from "yup";

const createPropertiesSchema = yup.object().shape({
  value: yup.number().required("field value is required"),
  size: yup.number().required("field size is required"),
  address: yup.object({
    district: yup.string().required("field district is required"),
    zipCode: yup
      .string()
      .max(8, "Invalid zipCode")
      .required("field zipCode is required"),
    number: yup.string().required("field number is required"),
    city: yup.string().required("field city is required"),
    state: yup
      .string()
      .max(2, "Invalid state")
      .required("field state is required"),
  }),
  categoryId: yup.string().required("field categoryId is required"),
});

export { createPropertiesSchema };
