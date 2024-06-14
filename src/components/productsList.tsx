"use client";

import getProducts from "@/lib/actions/get-products";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { Skeleton } from "./ui/Skeleton";
import { ShoppingBag } from "lucide-react";

interface ProductListProps {
  featured?: boolean;
  title?: string;
  categoryId?: string;
}

export const ProductList = (props: ProductListProps) => {
  const searchParams = useSearchParams();
  const colorId = searchParams.get("colorId");
  const sizeId = searchParams.get("sizeId");

  const { data, isLoading } = useQuery({
    queryKey: ["products", { colorId, sizeId }],
    queryFn: () =>
      getProducts({
        isFeatured: props.featured,
        colorId: colorId ?? undefined,
        sizeId: sizeId ?? undefined,
        categoryId: props.categoryId,
      }),
  });

  if (isLoading) {
    return <Loader title={props.title} />;
  }

  if (!isLoading && data?.length === 0) {
    return <Empty title={props.title} />;
  }

  return (
    <div className="lg:col-span-4 space-y-4">
      <h3 className="font-bold text-3xl">{props.title}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

const Loader = (props: { title?: string }) => {
  return (
    <div className="lg:col-span-4 space-y-4">
      <h3 className="font-bold text-3xl">{props.title}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="space-y-4" key={i}>
            <Skeleton className="aspect-square rounded-xl" />
            <div className="flex flex-col space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <Skeleton className="h-4 w-[200px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Empty = (props: { title?: string }) => {
  return (
    <div className="lg:col-span-4 space-y-4">
      <h3 className="font-bold text-3xl">{props.title}</h3>

      <div className="w-full flex items-center justify-center min-h-60">
        <ShoppingBag className="h-24 w-24 text-gray-300" />

        <div className="text-center">
          <h3 className="text-lg font-semibold">No Products Found</h3>
          <p className="text-gray-500">Try adjusting your filters.</p>
        </div>
      </div>
    </div>
  );
};
