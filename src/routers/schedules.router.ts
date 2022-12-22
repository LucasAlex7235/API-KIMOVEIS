import { Router } from "express";
import {
  auhValidationMiddleware,
  validateSchemaMiddleware,
  createSchedulesController,
  createSchedulesSchema,
  listSchedulesController,
  verifyAdmMiddleware,
} from "./imports";

const schedulesRouter = Router();

schedulesRouter.post(
  "",
  validateSchemaMiddleware(createSchedulesSchema),
  auhValidationMiddleware,
  createSchedulesController
);

schedulesRouter.get(
  "/properties/:id",
  auhValidationMiddleware,
  verifyAdmMiddleware,
  listSchedulesController
);

export default schedulesRouter;
