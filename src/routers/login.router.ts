import { Router } from "express";
import {
  loginUserController,
  loginUserSchema,
  validateSchemaMiddleware,
  verifyExistsMiddleware,
} from "./imports";

const loginRouter = Router();

loginRouter.post(
  "",
  validateSchemaMiddleware(loginUserSchema),
  verifyExistsMiddleware,
  loginUserController
);

export default loginRouter;
