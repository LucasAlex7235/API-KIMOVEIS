import { compare } from "bcryptjs";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/errors";

const verifyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const userRepo = AppDataSource.getRepository(User);
  const userExist: User[] = await userRepo.find({ where: { email: email } });

  if (!userExist[0]) {
    throw new AppError("Invalid email or password", 403);
  }
  const passwordMatch = await compare(password, userExist[0].password);

  if (!passwordMatch) {
    throw new AppError("Invalid email or password", 403);
  }
  req.user = userExist[0];
  next();
};

export { verifyExistsMiddleware };
