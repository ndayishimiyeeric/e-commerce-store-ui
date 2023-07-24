import Container from "@/components/ui/container";
import Billboard from "@/components/Billboard";
import getBillboard from "@/lib/actions/get-billboard";
import getProducts from "@/lib/actions/get-products";
import ProductList from "@/components/ProductList";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({isFeatured: true})
  const billboard = await getBillboard("ea44cb3d-8084-4113-a3f8-d995f176c237")
  return (
    <Container>
      <div className="space-y-10 pb-10">
          <Billboard data={billboard}/>
      </div>

      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
           <ProductList title="Featured Products" data={products}/>
      </div>
    </Container>
  )
}

export default HomePage;
