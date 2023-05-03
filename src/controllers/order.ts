import { Request, Response } from "express";
import { RequestExt } from "../interfaces/jwt.interface";
import { handleHttp } from "../utils/error.handle";

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.json({
      data: "This message can only be seen the persons who have a session with JWT",
      user: req.user,
    });
  } catch (error: any) {
    handleHttp(res, error._message);
  }
};

export { getItems };
