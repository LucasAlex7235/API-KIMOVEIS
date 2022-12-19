import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/errors";
import "dotenv/config";
import { IUserDecode } from "../interfaces/users/user.interface";

const auhValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    throw new AppError("Missing authorization token", 401);
  }

  const token = bearerToken.split(" ")[1];

  return verify(
    token,
    process.env.SECRET_KEY,
    (error, decoded: IUserDecode) => {
      if (error) {
        throw new AppError(error.message, 401);
      }
      req.userDecode = {
        id: decoded.sub,
        name: decoded.name,
      };
      next();
    }
  );
};

export { auhValidationMiddleware };
