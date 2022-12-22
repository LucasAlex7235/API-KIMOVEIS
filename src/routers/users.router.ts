import { Router } from "express";
import {
  auhValidationMiddleware,
  createUserController,
  createUserShape,
  deleteUserController,
  listUserController,
  updateUserController,
  updateUserShape,
  validateSchemaMiddleware,
  verifyAdmMiddleware,
} from "./imports";

const userRouter = Router();

userRouter.post(
  "",
  validateSchemaMiddleware(createUserShape),
  createUserController
);

userRouter.get(
  "",
  auhValidationMiddleware,
  verifyAdmMiddleware,
  listUserController
);

userRouter.delete(
  "/:id",
  auhValidationMiddleware,
  verifyAdmMiddleware,
  deleteUserController
);

userRouter.patch(
  "/:id",
  validateSchemaMiddleware(updateUserShape),
  auhValidationMiddleware,
  updateUserController
);

export default userRouter;
