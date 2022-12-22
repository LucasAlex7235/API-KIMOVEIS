import { Request, Response } from "express";
import createPropertiesService from "../../services/properties/createProperties.service";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertiesController = async (req: Request, res: Response) => {
  const propertyRequest: IPropertyRequest = req.body;
  const Response = await createPropertiesService(propertyRequest);
  return res.status(201).json(Response);
};

export default createPropertiesController;
