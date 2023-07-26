import Container from "@/components/ui/container";
import {Skeleton} from "@/components/ui/Skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="h-full">
          <div className="px-4 py-16 sm:px-6 lg:px-8">
              <Skeleton className="h-6 w-6 rounded-full"/>
              <Skeleton className="h-6 w-6 rounded-full"/>
          </div>
      </div>
    </Container>
  );
}

export default Loading;