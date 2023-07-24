import axios from "axios";
import {Product} from "@/types/product";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string):Promise<Product>  => {
    const {data} = await axios.get(`${URL}/${id}`)
    return data;
}

export default getProduct;
