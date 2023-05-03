import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkSession } from "../middlewares/session";

// TODO: Esta ruta solo puede acceder las personas que tengan la sesion activa
const router = Router();

router.get("/", checkSession, getItems);

export { router };