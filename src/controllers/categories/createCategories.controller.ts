import { Request, Response } from "express";
import { ICategoryRequest } from "../../interfaces/categories";
import createCategoriesService from "../../services/categories/createCategories.service";

const createCategoriesController = async (req: Request, res: Response) => {
  const categoryRequest: ICategoryRequest = req.body;
  const response: any = await createCategoriesService(categoryRequest);
  return res.status(201).json(response);
};

export default createCategoriesController;
