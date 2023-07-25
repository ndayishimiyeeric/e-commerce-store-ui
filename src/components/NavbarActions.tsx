"use client"

import {useEffect, useState} from "react";
import {ShoppingBag} from "lucide-react";
import Button from "@/components/ui/Button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const cart = useCart()

    if (!isMounted) return null
    return (
        <div className="ml-auto flex items-center gap-x-2">
            <Button className="flex items-center rounded-full bg-black px-4 py-2">
                <ShoppingBag
                    size={20}
                    color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
            </Button>
        </div>
    )
}

export default NavbarActions
