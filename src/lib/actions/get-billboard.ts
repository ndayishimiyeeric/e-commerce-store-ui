import axios from "axios";
import {Billboard} from "@/types/billboard";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string):Promise<Billboard>  => {
    const {data} = await axios.get(`${URL}/${id}`)
    return data;
}

export default getBillboard;
