import { Request, Response } from "express";
import listCategoriesByIdService from "../../services/categories/listCategoriesById.service";

const listCategoriesByIdController = async (req: Request, res: Response) => {
  const idParams: string = req.params.id;
  const Response = await listCategoriesByIdService(idParams);
  return res.status(200).json(Response);
};

export default listCategoriesByIdController;
