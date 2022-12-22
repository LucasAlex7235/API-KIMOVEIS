import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/errors";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertiesService = async (propertyRequest: IPropertyRequest) => {
  const { district, city, state, zipCode, number } = propertyRequest.address;
  const { address, categoryId, size, value } = propertyRequest;
  const addressesRepo = AppDataSource.getRepository(Addresses);
  const categoriesRepo = AppDataSource.getRepository(Categories);
  const propertiesRepo = AppDataSource.getRepository(Properties);

  const addressesQueryBuilder = addressesRepo.createQueryBuilder("addresses");
  const propertiesQueryBuilder = addressesRepo.createQueryBuilder("properties");

  const categoriesQueryBuilder =
    categoriesRepo.createQueryBuilder("categories");

  const addressesExist = await addressesQueryBuilder
    .where("addresses.district = :district", { district })
    .andWhere("addresses.number = :number", { number })
    .getOne();

  const categoryExist = await categoriesQueryBuilder
    .where("categories.id = :categoryId", { categoryId })
    .getOne();

  if (!categoryExist) {
    throw new AppError("Category not exists", 404);
  } else if (addressesExist) {
    throw new AppError("Property already registered", 409);
  }
  const addresses = addressesRepo.create({ ...propertyRequest.address });
  await addressesRepo.save(addresses);
  const property = propertiesRepo.create({
    value,
    size,
    address: addresses,
    category: categoryExist,
  });
  await propertiesRepo.save(property);
  return property;
};

export default createPropertiesService;
