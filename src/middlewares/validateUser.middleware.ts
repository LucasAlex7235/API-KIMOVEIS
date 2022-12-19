import { Errback, Request, Response, NextFunction } from "express";
import { AppError } from "../errors/errors";

const validateSchemaMiddleware =
  (serializer: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const validated = await serializer
      .validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      })
      .catch((err: Errback) => {
        return err;
      });

    if (validated.errors) {
      throw new AppError(validated.errors, 400);
    }

    return next();
  };

export { validateSchemaMiddleware };
