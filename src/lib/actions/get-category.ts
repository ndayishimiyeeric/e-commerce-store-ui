import { Category } from "@/types/category";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const data = await fetch(`${URL}/${id}`);
  return data.json();
};

export default getCategory;
