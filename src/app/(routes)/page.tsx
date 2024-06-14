import Container from "@/components/ui/container";
import Billboard from "@/components/Billboard";
import getBillboard from "@/lib/actions/get-billboard";
import MobileFilter from "@/components/filter/MobileFilter";
import getColors from "@/lib/actions/get-colors";
import getSizes from "@/lib/actions/get-sizes";
import Filter from "@/components/filter/Filter";
import { ProductList } from "@/components/productsList";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const HomePage = async () => {
  const colors = await getColors();
  const sizes = await getSizes();
  const billboard = await getBillboard("8514e56a-801e-4621-855d-035c19ba768f");
  return (
    <Container>
      <Billboard data={billboard} />
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          <MobileFilter colors={colors} sizes={sizes} />

          <div className="hidden lg:block">
            <Filter data={sizes} valueKey="sizeId" name="Sizes" />
            <Filter data={colors} valueKey="colorId" name="Colors" />
          </div>

          <ProductList featured title="Featured Products" />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
