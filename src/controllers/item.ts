import { Request, Response } from "express";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.service";
import { handleHttp } from "../utils/error.handle";

const getItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await getCar(id);
        const data = response ? response : "NOT_FOUND"
        res.json(data);
    } catch (error: any) {
       handleHttp(res, error._message);
    }
};

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.json(response);
    } catch (error: any) {
        handleHttp(res, error._message);
    }
};

const updateItems = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const response = await updateCar(id, data);
        res.json(response);
    } catch (error: any) {
        handleHttp(res, error._message);
    }
};

const postItem = async (req: Request, res: Response) => {
    try {
        const responseItem = await insertCar(req.body);
        res.json(responseItem);
    } catch (error: any) {
        handleHttp(res, error._message);
    }
};

const deleteItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await deleteCar(id);
        res.json(response);
    } catch (error: any) {
        handleHttp(res, error._message);
    }
};

export { getItem, getItems, updateItems, postItem, deleteItem };
