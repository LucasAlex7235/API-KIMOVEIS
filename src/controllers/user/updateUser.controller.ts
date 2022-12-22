import { Request, Response } from "express";
import { IUserBody, IUserDecode } from "../../interfaces/users/user.interface";
import updateUserService from "../../services/user/updateUser.service";

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  const user: IUserBody = req.body;
  const idParams: string = req.params.id;
  const userDecoded: IUserDecode = req.userDecode;
  const response = await updateUserService(idParams, userDecoded, user);
  return res.status(200).json(response);
};

export default updateUserController;
