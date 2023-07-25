import {Size} from "@/types/size";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async ():Promise<Size[]>  => {
    const data = await fetch(URL)
    return data.json();
}

export default getSizes;
