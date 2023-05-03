import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes/index";
import db from "./config/mongo";

const PORT = 8080 || process.env.PORT;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

db().then(() => console.log("Mongo running!"));

app.listen(PORT, () => console.log("Server up!"));