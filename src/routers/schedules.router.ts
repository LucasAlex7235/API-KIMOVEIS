import { Router } from "express";
import {
  auhValidationMiddleware,
  validateSchemaMiddleware,
  createSchedulesController,
  createSchedulesSchema,
} from "./imports";

const schedulesRouter = Router();

schedulesRouter.post(
  "",
  validateSchemaMiddleware(createSchedulesSchema),
  auhValidationMiddleware,
  createSchedulesController
);

export default schedulesRouter;
