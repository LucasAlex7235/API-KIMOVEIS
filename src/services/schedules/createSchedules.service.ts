import AppDataSource from "../../data-source";
import { ShedulesUsersProperties } from "../../entities/schedulesProperties.entity";
import { AppError } from "../../errors/errors";
import { IScheduleRequest } from "../../interfaces/schedules";
import { Properties } from "../../entities/properties.entity";
import { User } from "../../entities/user.entity";

const createSchedulesService = async (
  scheduleRequest: IScheduleRequest,
  userId: string
) => {
  const { date, hour, propertyId } = scheduleRequest;
  const schedulesRepo = AppDataSource.getRepository(ShedulesUsersProperties);
  const usersRepo = AppDataSource.getRepository(User);

  const propertiesRepo = AppDataSource.getRepository(Properties);
  const propertiesQueryBuilder =
    propertiesRepo.createQueryBuilder("properties");

  const propertiesExist = await propertiesRepo.exist({
    where: { id: propertyId },
  });

  const schedulesHours: any = await propertiesQueryBuilder
    .leftJoinAndSelect(
      "properties.shedules_users_properties",
      "shedules_users_properties",
      "shedules_users_properties.property = properties.id"
    )
    .where("properties.id = :id", { id: propertyId })
    .getMany();

  const properties = schedulesHours.filter((el) => el.id === propertyId);

  const hoursExist = properties.some((el) =>
    el.shedules_users_properties.some(
      (elemHour) => elemHour.hour.split(":").slice(0, -1).join(":") === hour
    )
  );

  const user = await usersRepo.findOne({
    where: { id: userId },
  });

  const schedule = await propertiesRepo.findOne({
    where: { id: propertyId },
  });

  if (!propertiesExist) {
    throw new AppError(`Property with id ${propertyId} does not exist`, 404);
  } else if (hoursExist) {
    throw new AppError(`This time already exists in property ${hour}`, 404);
  } else {
    await schedulesRepo.save({
      date,
      hour,
      property: schedule,
      user: user,
    });
    return schedulesHours[0];
  }
};

export default createSchedulesService;
