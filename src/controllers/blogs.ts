import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
       handleHttp(res, "ERROR_GET_BLOG");
    }
};

const getItems = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_GET_BLOGS");
    }
};

const updateItems = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_UPDATE_BLOGS");
    }
};

const postItem = (req: Request, res: Response) => {
    try {
        const body = req.body;
        res.json(body);
    } catch (error) {
        handleHttp(res, "ERROR_POST_BLOG");
    }
};

const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_DELETE_BLOG");
    }
};

export { getItem, getItems, updateItems, postItem, deleteItem };
