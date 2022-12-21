import jwt from "jsonwebtoken";
import { IUserDecode } from "../../interfaces/users/user.interface";

const loginUserService = async (user: IUserDecode): Promise<object> => {
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
