import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/errors";

const listCategoriesByIdService = async (
  idParams: string
): Promise<Categories> => {
  const categoriesRepo = AppDataSource.getRepository(Categories);

  const categoriesQueryBuilder =
    categoriesRepo.createQueryBuilder("categories");

  const categoriesIdExist = await categoriesQueryBuilder
    .where("categories.id = :idCategories", { idCategories: idParams })
    .getOne();

  if (!categoriesIdExist) {
    throw new AppError("Invalid Id", 404);
  }
  const categoriesProperties = await categoriesQueryBuilder
    .innerJoinAndSelect("categories.properties", "propertiesCategories")
    .where("categories.id = :idCategories", {
      idCategories: idParams,
    })
    .getOne();

  if (!categoriesProperties) {
    return { ...categoriesIdExist, properties: null };
  }
  return categoriesIdExist;
};

export default listCategoriesByIdService;
