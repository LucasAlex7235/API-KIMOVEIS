import { Router } from "express";
import {
  auhValidationMiddleware,
  validateSchemaMiddleware,
  verifyAdmMiddleware,
  createCategoriesController,
  createCategoriesSchema,
  listCategoriesController,
  listCategoriesByIdController,
} from "./imports";

const categoriesRouter = Router();

categoriesRouter.post(
  "",
  validateSchemaMiddleware(createCategoriesSchema),
  auhValidationMiddleware,
  verifyAdmMiddleware,
  createCategoriesController
);

categoriesRouter.get("", listCategoriesController);

categoriesRouter.get("/:id/properties", listCategoriesByIdController);

export default categoriesRouter;
