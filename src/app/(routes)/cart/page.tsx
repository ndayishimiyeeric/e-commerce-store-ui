"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";
import { ShoppingCartIcon } from "lucide-react";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>

          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <div className="w-full flex items-center justify-center min-h-60">
                  <ShoppingCartIcon className="h-24 w-24 text-gray-300" />

                  <div className="text-center">
                    <h3 className="text-lg font-semibold">
                      No items added to cart
                    </h3>
                    <p className="text-gray-500">
                      Add items to get started shopping.
                    </p>
                  </div>
                </div>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem data={item} key={item.id} />
                ))}
              </ul>
            </div>

            <CartSummary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
