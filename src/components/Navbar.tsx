import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/MainNav";
import getCategories from "@/lib/actions/get-categories";
import NavbarActions from "@/components/NavbarActions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="flex gap-x-2 ml-4 lg:ml-0">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
