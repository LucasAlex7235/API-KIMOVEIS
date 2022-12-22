import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/errors";

const verifyAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.userDecode.id;
  const userRepo = AppDataSource.getRepository(User);
  const userIsAdm = await userRepo.find({ where: { id: id } });
  if (!userIsAdm[0].isAdm) {
    throw new AppError("User needs to be adm", 403);
  }
  next();
};

export { verifyAdmMiddleware };
