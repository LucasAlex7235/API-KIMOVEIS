import * as yup from "yup";

const createSchedulesSchema = yup.object().shape({
  date: yup.string().required("field date is required"),
  hour: yup.string().required("field hour is required"),
  propertyId: yup.string().required("field propertyId is required"),
});

export { createSchedulesSchema };
