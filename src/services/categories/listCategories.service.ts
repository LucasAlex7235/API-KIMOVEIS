import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";

const listCategoriesService = async (): Promise<Categories[]> => {
  const categoriesRepo = AppDataSource.getRepository(Categories);

  const categoriesQueryBuilder =
    categoriesRepo.createQueryBuilder("categories");

  const categoriesProperties = await categoriesQueryBuilder.getMany();

  return categoriesProperties;
};

export default listCategoriesService;
