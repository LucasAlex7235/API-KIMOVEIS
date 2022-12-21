import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/errors";

const deleteUserService = async (id: string) => {
  const userRepo = AppDataSource.getRepository(User);
  const userExist = await userRepo.find({ where: { id: id } });
  const userDelete = userExist[0];

  if (userDelete && !userDelete.isActive) {
    throw new AppError("User is not active", 400);
  } else if (!userDelete) {
    throw new AppError("User not exists", 404);
  } else if (userDelete) {
    // await userRepo.delete({ id: id }); --- delete
    await userRepo.update(id, { isActive: false });
    return {};
  }
};

export default deleteUserService;
