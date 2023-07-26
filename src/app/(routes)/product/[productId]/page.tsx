import getProduct from "@/lib/actions/get-product";
import getProducts from "@/lib/actions/get-products";
import Container from "@/components/ui/container";
import ProductList from "@/components/ProductList";
import Gallery from "@/components/gallery";
import ProductInfo from "@/components/ProductInfo";

export const revalidate = 0;

interface ProductPageProps {
    params: {
        productId: string;
    }
}
const ProductPage = async ({params}: ProductPageProps) => {
    const product = await getProduct(params.productId);
    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id,
    })

    return (
        <Container>
            <div className="px-4 py-10 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    {/* Gallery */}
                    <Gallery images={product.images} />

                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        {/* Info */}
                        <ProductInfo data={product} />
                    </div>
                </div>

                <hr className="my-10"/>

                <ProductList title="Related Items" data={suggestedProducts}/>
            </div>
        </Container>
    )
};

export default ProductPage;
