import { Request, Response } from "express";
import listUserService from "../services/listUser.service";

const listUserController = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  const response = await listUserService();
  return res.status(200).json(response);
};

export default listUserController;
