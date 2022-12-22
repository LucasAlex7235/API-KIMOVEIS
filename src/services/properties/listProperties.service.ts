import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";

const listPropertiesService = async (): Promise<Properties[]> => {
  const propertiesRepo = AppDataSource.getRepository(Properties);
  const propertiesQueryBuilder =
    propertiesRepo.createQueryBuilder("properties");

  const properties = await propertiesQueryBuilder
    .innerJoinAndSelect("properties.address", "addressProperty")
    .getMany();

  return properties;
};

export default listPropertiesService;
