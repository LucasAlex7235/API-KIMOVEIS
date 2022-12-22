import { Request, Response } from "express";
import { IScheduleRequest } from "../../interfaces/schedules";
import createSchedulesService from "../../services/schedules/createSchedules.service";

const createSchedulesController = async (req: Request, res: Response) => {
  const scheduleRequest: IScheduleRequest = req.body;
  const userId: string = req.userDecode.id;
  const response = await createSchedulesService(scheduleRequest, userId);
  return res.status(201).json(response);
};

export default createSchedulesController;
