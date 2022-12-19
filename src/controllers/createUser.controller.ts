import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users/user.interface";
import createUserService from "../services/createUser.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  const user: IUserRequest = req.body;
  const response = await createUserService(user);
  return res.status(201).json(response);
};

export default createUserController;
