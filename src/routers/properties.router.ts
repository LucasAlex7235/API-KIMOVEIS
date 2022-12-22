import { Router } from "express";
import {
  auhValidationMiddleware,
  validateSchemaMiddleware,
  verifyAdmMiddleware,
  createPropertiesSchema,
  createPropertiesController,
  listPropertiesController,
} from "./imports";

const propertiesRouter = Router();

propertiesRouter.post(
  "",
  validateSchemaMiddleware(createPropertiesSchema),
  auhValidationMiddleware,
  verifyAdmMiddleware,
  createPropertiesController
);

propertiesRouter.get("", listPropertiesController);

export default propertiesRouter;
