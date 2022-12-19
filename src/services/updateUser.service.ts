import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/errors";
import {
  IUser,
  IUserBody,
  IUserDecode,
} from "../interfaces/users/user.interface";

const updateUserService = async (
  idParams: string,
  userDecoded: IUserDecode,
  user: IUserBody
) => {
  const userRepo = AppDataSource.getRepository(User);
  const userExist = await userRepo.exist({ where: { id: idParams } });
  const userIsAdm: IUser[] = await userRepo.find({
    where: { id: userDecoded.id },
  });
  const { isAdm, isActive, id } = user;

  if (!userExist) {
    throw new AppError("Id does not exist", 404);
  } else if (isAdm !== undefined) {
    throw new AppError("Not allowed to change isAdm", 401);
  } else if (isActive !== undefined) {
    throw new AppError("Not allowed to change isActive", 401);
  } else if (id !== undefined) {
    throw new AppError("Not allowed to change id", 401);
  } else if (!userIsAdm[0].isAdm && userDecoded.id !== idParams) {
    throw new AppError(
      "Not allowed to update another user without adm permission",
      404
    );
  } else if (!userIsAdm[0].isAdm && userDecoded.id === idParams) {
    await userRepo.update(idParams, user);
    const userData = await userRepo.find({ where: { id: idParams } });
    return userData;
  }
  await userRepo.update(idParams, user);
  const userData = await userRepo.find({ where: { id: idParams } });

  return userData;
};

export default updateUserService;
