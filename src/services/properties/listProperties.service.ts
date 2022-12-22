import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { IPropertyRequest } from "../../interfaces/properties";

const listPropertiesService = async () => {
  const propertiesRepo = AppDataSource.getRepository(Properties);
  const propertiesQueryBuilder =
    propertiesRepo.createQueryBuilder("properties");

  const properties = await propertiesQueryBuilder
    .innerJoinAndSelect("properties.address", "addressProperty")
    .getMany();

  return properties;
};

export default listPropertiesService;
