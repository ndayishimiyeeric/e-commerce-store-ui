import getProducts from "@/lib/actions/get-products";
import getColors from "@/lib/actions/get-colors";
import getSizes from "@/lib/actions/get-sizes";
import getCategory from "@/lib/actions/get-category";
import Container from "@/components/ui/container";
import Billboard from "@/components/Billboard";
import Filter from "@/components/filter/Filter";
import NoResults from "@/components/NoResults";
import ProductCard from "@/components/ProductCard";
import MobileFilter from "@/components/filter/MobileFilter";

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

interface CategoryPageProps {
    params: {
        categoryId: string;
    };
    searchParams: {
        colorId: string;
        sizeId: string;
    };
}

const CategoryPage = async ({params, searchParams}: CategoryPageProps) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
    })
    const colors = await getColors();
    const sizes = await getSizes();
    const category = await getCategory(params.categoryId);

    return (
        <div className="bg-white ">
            <Container>
                <Billboard data={category.billboard}/>

                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        {/* mobile filters */}
                        <MobileFilter colors={colors} sizes={sizes}/>

                        <div className="hidden lg:block">
                            <Filter data={sizes} valueKey="sizeId" name="Sizes"/>
                            <Filter data={colors} valueKey="colorId" name="Colors"/>
                        </div>

                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults/>}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((product) => (
                                    <ProductCard data={product} key={product.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default CategoryPage;
