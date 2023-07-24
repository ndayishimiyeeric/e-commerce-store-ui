import {Category} from "@/types/category";
import {Size} from "@/types/size";
import {Image} from "@/types/image";
import {Color} from "@/types/color";

export interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    size: Size;
    images: Image[];
    color: Color
}
