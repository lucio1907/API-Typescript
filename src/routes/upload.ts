import { Router } from "express";
import { getFile } from "../controllers/upload";
import multerMiddleware from "../middlewares/file";
import { checkSession } from "../middlewares/session";

const router = Router();

router.post("/", checkSession, multerMiddleware.single("myfile"), getFile);

export { router }