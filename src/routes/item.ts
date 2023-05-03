import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItems } from "../controllers/item";
import { logMiddleware } from "../middlewares/log";

const router = Router();

router.get("/", getItems)
router.get("/:id", logMiddleware, getItem);

router.post("/", postItem);

router.put("/:id", updateItems);

router.delete("/:id", deleteItem);

export { router };