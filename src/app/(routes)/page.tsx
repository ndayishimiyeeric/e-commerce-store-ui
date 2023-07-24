import Container from "@/components/ui/container";
import Billboard from "@/components/Billboard";
import getBillboard from "@/lib/actions/get-billboard";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("ea44cb3d-8084-4113-a3f8-d995f176c237")
  return (
    <Container>
      <div className="space-y-10 pb-10">
          <Billboard data={billboard}/>
      </div>
    </Container>
  )
}

export default HomePage;
