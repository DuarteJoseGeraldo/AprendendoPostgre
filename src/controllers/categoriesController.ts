import { NextFunction, Request, Response } from "express";
import categoryService from "../service/categoryService";
import { Category } from "../repository/categoryRepository";

const index = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await categoryService.getAll();

    res.status(200).send(categories);
  } catch (error: any) {
    next(error);
  }
};

const insert = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newData: Category = req.body;

    if (!newData.image) {
      newData.image =
        "https://cdn-icons-png.flaticon.com/512/758/758462.png?w=740&t=st=1685719647~exp=1685720247~hmac=3aab78959a224bd294c6175d9f8a2f2e5b686b008025dc1d55ee3929e02636e3";
    }

    const newCategory = await categoryService.insertCategory(newData);

    res.status(200).send(newCategory);
  } catch (error: any) {
    next(error);
  }
};

export default { insert, index };
