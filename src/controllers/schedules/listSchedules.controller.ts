import { Request, Response } from "express";
import listSchedulesService from "../../services/schedules/listSchedules.service";

const listSchedulesController = async (req: Request, res: Response) => {
  const idParams: string = req.params.id;
  const Response = await listSchedulesService(idParams);
  return res.status(200).json(Response);
};

export default listSchedulesController;
