import getColors from "@/lib/actions/get-colors";
import getSizes from "@/lib/actions/get-sizes";
import getCategory from "@/lib/actions/get-category";
import Container from "@/components/ui/container";
import Billboard from "@/components/Billboard";
import Filter from "@/components/filter/Filter";
import MobileFilter from "@/components/filter/MobileFilter";
import { ProductList } from "@/components/productsList";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const colors = await getColors();
  const sizes = await getSizes();
  const category = await getCategory(params.categoryId);

  return (
    <Container>
      <Billboard data={category.billboard} />
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          <MobileFilter colors={colors} sizes={sizes} />

          <div className="hidden lg:block">
            <Filter data={sizes} valueKey="sizeId" name="Sizes" />
            <Filter data={colors} valueKey="colorId" name="Colors" />
          </div>

          <ProductList categoryId={params.categoryId} />
        </div>
      </div>
    </Container>
  );
};

export default CategoryPage;
