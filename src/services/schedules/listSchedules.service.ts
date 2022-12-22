import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { ShedulesUsersProperties } from "../../entities/schedulesProperties.entity";
import { AppError } from "../../errors/errors";

const listSchedulesService = async (
  idParams: string
): Promise<{ schedules: ShedulesUsersProperties[] }> => {
  const propertiesRepo = AppDataSource.getRepository(Properties);

  const propertiesQueryBuilder =
    propertiesRepo.createQueryBuilder("properties");

  const schedulesProperties = await propertiesQueryBuilder
    .innerJoinAndSelect(
      "properties.shedules_users_properties",
      "propertiesSchedules"
    )
    .innerJoinAndSelect("propertiesSchedules.user", "userProperties")
    .where("properties.id = :idProperties", { idProperties: idParams })
    .getOne();

  if (!schedulesProperties) {
    throw new AppError(`Property with id ${idParams} does not exist`, 404);
  }

  const response = { schedules: schedulesProperties.shedules_users_properties };
  return response;
};

export default listSchedulesService;
