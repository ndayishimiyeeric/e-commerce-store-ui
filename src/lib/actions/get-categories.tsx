import {Category} from "@/types/category";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async ():Promise<Category[]>  => {
    const data = await fetch(URL)
    return data.json();
}

export default getCategories;
