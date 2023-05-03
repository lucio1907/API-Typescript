import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcryptHandle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async (authUser: User) => {
  const { email, password, name } = authUser;
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREADY_USER";
  const passwordHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passwordHash,
    name,
  });
  return registerNewUser;
};

const loginUser = async (auth: Auth) => {
    const { email, password } = auth;
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password; // Encriptado de la base de datos
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return "PASSWORD_INCORRECT";

    const token = await generateToken(checkIs.email);
    
    const data = {
      token,
      user: checkIs
    }

    return data;
};

export { registerNewUser, loginUser };
