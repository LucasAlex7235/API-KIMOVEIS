import AppDataSource from "../../data-source";
import { ShedulesUsersProperties } from "../../entities/schedulesProperties.entity";
import { AppError } from "../../errors/errors";
import { IScheduleRequest } from "../../interfaces/schedules";
import { Properties } from "../../entities/properties.entity";
import { User } from "../../entities/user.entity";

const createSchedulesService = async (
  scheduleRequest: IScheduleRequest,
  userId: string
): Promise<{ message: string }> => {
  const { date, hour, propertyId } = scheduleRequest;

  const validHour = +hour.split(":")[0] <= 24 && +hour.split(":")[0] >= 0;
  const availableOpeningHours =
    (+hour.split(":")[0] >= 18 && +hour.split(":")[1] > 0) ||
    +hour.split(":")[0] > 18 ||
    +hour.split(":")[0] < 8;

  if (!validHour) {
    throw new AppError(`Invalid schedule ${hour}`, 404);
  }

  const schedulesRepo = AppDataSource.getRepository(ShedulesUsersProperties);
  const usersRepo = AppDataSource.getRepository(User);
  const propertiesRepo = AppDataSource.getRepository(Properties);

  const workingDays = new Date(date).getDay();

  const propertiesQueryBuilder =
    propertiesRepo.createQueryBuilder("properties");

  const usersQueryBuilder = usersRepo.createQueryBuilder("users");

  const schedulesHours: any = await propertiesQueryBuilder
    .innerJoinAndSelect(
      "properties.shedules_users_properties",
      "propertiesSchedules"
    )
    .where("properties.id = :id", { id: propertyId })
    .andWhere("propertiesSchedules.hour = :hourUser", { hourUser: hour })
    .getOne();

  const userHoursProperties = await usersQueryBuilder
    .innerJoinAndSelect("users.shedules_users_properties", "userSchedules")
    .where("users.id = :userId", { userId: userId })
    .andWhere("userSchedules.hour = :hour", { hour: hour })
    .getOne();

  const propertiesExist = await propertiesRepo.exist({
    where: { id: propertyId },
  });

  const user = await usersRepo.findOne({
    where: { id: userId },
  });

  const schedule = await propertiesRepo.findOne({
    where: { id: propertyId },
  });

  if (!propertiesExist) {
    throw new AppError(`Property with id ${propertyId} does not exist`, 404);
  } else if (workingDays == 6 || workingDays == 0) {
    throw new AppError(
      `Date unavailable. Service only from Monday to Friday`,
      400
    );
  } else if (availableOpeningHours) {
    throw new AppError(
      `Unavailable time. Opening hours are from 08:00 to 18:00`,
      400
    );
  } else if (schedulesHours) {
    throw new AppError(`This time already exists in property ${hour}`, 409);
  } else if (userHoursProperties) {
    throw new AppError(
      "User already has this schedule in another property",
      409
    );
  } else {
    const response = schedulesRepo.create({
      date,
      hour,
      property: schedule,
    });
    await schedulesRepo.save({ ...response, user: user });
    return { message: "Appointment successfully scheduled" };
  }
};

export default createSchedulesService;
