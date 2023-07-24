"use client"

import {Product} from "@/types/product";
import {Expand, ShoppingCart} from "lucide-react";
import Image from "next/image";
import IconButton from "@/components/ui/IconButton";
import Currency from "@/components/ui/Currency";

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {
    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* images and actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={data?.images[0]?.url}
                    alt="image"
                    fill
                    className="aspect-square object-cover rounded-md"
                />

                <div className="opacity-0 group-hover:opacity-100 absolute bottom-6 w-full px-6 transition">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            icon={<Expand size={20} className="text-gray-600"/>}
                            onClick={() => {}}
                        />

                        <IconButton
                            icon={<ShoppingCart size={20} className="text-gray-600"/>}
                            onClick={() => {}}
                        />
                    </div>
                </div>
            </div>

            {/* product info */}
            <div>
                <p className="font-semibold text-lg">{data.name}</p>
                <p className="text-sm text-gray-500">{data.category.name}</p>
            </div>

            {/* price */}
            <div className="flex items-center justify-between">
                <Currency value={data.price}/>
            </div>
        </div>
    );
};

export default ProductCard;
