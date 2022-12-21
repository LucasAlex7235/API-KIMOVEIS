import { Request, Response } from "express";
import loginUserService from "../../services/user/loginUser.service";

const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  const user: any = req.user;
  const response = await loginUserService(user);
  return res.status(200).json(response);
};

export default loginUserController;
