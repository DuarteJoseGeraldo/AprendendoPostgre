import { Router } from "express";
import categoriesController from "../controllers/categoriesController";

const categories: Router = Router();

categories.get("/", categoriesController.index);

categories.post("/", categoriesController.insert);
export { categories };
