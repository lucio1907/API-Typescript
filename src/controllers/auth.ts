import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.service";
import { handleHttp } from "../utils/error.handle";

const registerCtrl = async (req: Request, res: Response) => {
  try {
    const responseUser = await registerNewUser(req.body);
    res.json(responseUser);
  } catch (error: any) {
    handleHttp(res, error._message);
  }
};

const loginCtrl = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  try {
    const responseUser = await loginUser({ email, password });

    if (responseUser === "PASSWORD_INCORRECT") {
        res.status(403);
        res.json(responseUser);
    } else {
        res.json(responseUser);
    }
  } catch (error: any) {
    handleHttp(res, error._message);
  }
};

export { registerCtrl, loginCtrl };
