import { Category } from "../repository/categoryRepository";
import categoryRepository from "../repository/categoryRepository";
import { makeError } from "../middlewares/errorHandler";

const getAll = async (): Promise<Category[]> => {
  const result = await categoryRepository.index();

  return result.map((item: Category) => {
    return {
      name: item.name,
      image: item.image
        ? item.image
        : "https://cdn-icons-png.flaticon.com/512/758/758462.png?w=740&t=st=1685719647~exp=1685720247~hmac=3aab78959a224bd294c6175d9f8a2f2e5b686b008025dc1d55ee3929e02636e3",
    };
  });
};

const findCategoryByName = async (name: string) => {
  const result = await categoryRepository.selectByName(name);
  if (!result.length) {
    throw makeError({
      message: "Category not Found",
      status: 400,
    });
  }
  return result;
};

const findCategoryById = async (id: number) => {
  const result = await categoryRepository.selectById(id);
  if (!result.length) {
    throw makeError({
      message: "Category not Found",
      status: 400,
    });
  }
  return result[0];
};

const insertCategory = async (category: Category) => {
  const findCategory: any = await categoryRepository.selectByName(
    category.name
  );
  if (findCategory[0]) {
    throw makeError({
      message: "Category already registered",
      status: 400,
    });
  }
  const id: any = await categoryRepository.insert(category);
  const newCategory = await findCategoryById(id);
  return newCategory;
};

export default {
  getAll,
  findCategoryByName,
  findCategoryById,
  insertCategory,
};

// try {
// } catch (error: any) {
//   return error.message ? { error: error.message } : error;
// }
