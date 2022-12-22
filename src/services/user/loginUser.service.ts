import jwt from "jsonwebtoken";
import { AppError } from "../../errors/errors";
import { IUserDecode } from "../../interfaces/users/user.interface";

const loginUserService = async (user: IUserDecode): Promise<object> => {
  if (!user.isActive) {
    throw new AppError("User not exist", 400);
  }
  const token = jwt.sign(
    {
      name: user.name,
      id: user.id,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );
  return { token: token };
};

export default loginUserService;
