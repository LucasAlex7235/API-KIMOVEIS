import { Request, Response } from "express";
import deleteUserService from "../services/deleteUser.service";

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  const id = req.params.id;
  const response = await deleteUserService(id);
  return res.status(204).json(response);
};

export default deleteUserController;
