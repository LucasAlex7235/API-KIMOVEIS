import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/errors";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoriesService = async (categoryRequest: ICategoryRequest) => {
  const { name } = categoryRequest;
  const categotiesRepo = AppDataSource.getRepository(Categories);
  const categoriesQueryBuilder =
    categotiesRepo.createQueryBuilder("categories");

  const userHoursProperties = await categoriesQueryBuilder
    .where("categories.name = :name", { name: name })
    .getOne();

  if (userHoursProperties) {
    throw new AppError(`Category with name ${name} already exists`, 409);
  }

  const response = await categotiesRepo.save(categoryRequest);
  return response;
};

export default createCategoriesService;
