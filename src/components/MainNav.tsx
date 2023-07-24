"use client"

import {usePathname} from "next/navigation";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Category} from "@/types/category";


interface MainNavProps {
    data: Category[];
}

const MainNav = ({data}: MainNavProps) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))

    return (
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            {routes.map((route) => (
                <Link
                    href={route.href}
                    key={route.href}
                    className={cn("text-sm font-medium transition-colors hover:text-black",
                        route.active ? "text-black" : "text-neutral-500")}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
};

export default MainNav;
