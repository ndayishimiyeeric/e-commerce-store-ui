import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/Skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-8">
        <div className="mx-auto px-4 py-10 sm:px-6 max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div className="space-y-4">
              <Skeleton className="rounded-xl aspect-square" />
              <div className="grid grid-cols-4 gap-6">
                <Skeleton className="rounded-md h-full w-full aspect-square" />
                <Skeleton className="rounded-md h-full w-full aspect-square" />
                <Skeleton className="rounded-md h-full w-full aspect-square" />
                <Skeleton className="rounded-md h-full w-full aspect-square" />
              </div>
            </div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <div className="space-y-4">
                <Skeleton className="h-8 w-[200px]" />
                <Skeleton className="h-6 w-[50px]" />
                <hr />
                <Skeleton className="h-6 w-[200px]" />
                <Skeleton className="h-6 w-[200px]" />
                <Skeleton className="h-16 w-[100px]" />
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <Skeleton className="h-6 w-[300px]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="space-y-4">
                <Skeleton className="aspect-square rounded-xl" />
                <div className="flex flex-col space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
                <Skeleton className="h-4 w-[200px]" />
              </div>
              <div className="space-y-4">
                <Skeleton className="aspect-square rounded-xl" />
                <div className="flex flex-col space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
                <Skeleton className="h-4 w-[200px]" />
              </div>
              <div className="space-y-4">
                <Skeleton className="aspect-square rounded-xl" />
                <div className="flex flex-col space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
                <Skeleton className="h-4 w-[200px]" />
              </div>
              <div className="space-y-4">
                <Skeleton className="aspect-square rounded-xl" />
                <div className="flex flex-col space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
                <Skeleton className="h-4 w-[200px]" />
              </div>
              <div className="space-y-4">
                <Skeleton className="aspect-square rounded-xl" />
                <div className="flex flex-col space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
                <Skeleton className="h-4 w-[200px]" />
              </div>
              <div className="space-y-4">
                <Skeleton className="aspect-square rounded-xl" />
                <div className="flex flex-col space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Loading;
