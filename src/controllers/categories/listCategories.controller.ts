import { Request, Response } from "express";
import listCategoriesService from "../../services/categories/listCategories.service";

const listCategoriesController = async (req: Request, res: Response) => {
  const Response = await listCategoriesService();
  return res.status(200).json(Response);
};

export default listCategoriesController;
