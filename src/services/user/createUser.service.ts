import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/errors";
import { IUserRequest } from "../../interfaces/users/user.interface";

const createUserService = async (userBody: IUserRequest): Promise<User> => {
  const email = userBody.email;
  const userRepo = AppDataSource.getRepository(User);
  const userExists = await userRepo.exist({ where: { email: email } });

  if (!userExists) {
    const user = userRepo.create(userBody);
    await userRepo.save(user);
    delete user.password;
    return user;
  }
  throw new AppError("User already exists", 409);
};

export default createUserService;
