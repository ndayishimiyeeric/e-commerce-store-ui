import {Product} from "@/types/product";
import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    isFeatured?: boolean;
    colorId?: string;
    sizeId?: string;
}

const getProducts = async (query: Query):Promise<Product[]>  => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        }
    })
    const data = await fetch(URL)
    return data.json();
}

export default getProducts;
