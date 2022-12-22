import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const listUserService = async (): Promise<User[]> => {
  const userRepo = AppDataSource.getRepository(User);
  const listUsers = await userRepo.find({
    select: {
      id: true,
      name: true,
      email: true,
      isAdm: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return listUsers;
};

export default listUserService;
