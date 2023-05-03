import { Router } from "express";
import { readdirSync } from "fs";

// ** Todo este archivo sirve para cargar las rutas dinamicamente

const PATH = `${__dirname}`
const router = Router();

const cleanFileName = (filename: string) => {
    const file = filename.split(".").shift() // Remueve la extension
    return file;
}

readdirSync(PATH).filter((filename) => {
    const cleanName = cleanFileName(filename); 
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router);
        })
    }
});

export { router }; 