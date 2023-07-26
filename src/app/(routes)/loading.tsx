import Container from "@/components/ui/container";
import {Skeleton} from "@/components/ui/Skeleton";

const Loading = () => {
    return (
        <Container>
            <div className="w-full h-full p-8">
                <Skeleton className="w-full rounded-xl aspect-square md:aspect-[2.4/1]"/>
                <div className='mt-8 space-y-4'>
                    <Skeleton className="h-6 w-[300px]"/>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="space-y-4">
                            <Skeleton className="aspect-square rounded-xl"/>
                            <div className="flex flex-col space-y-2">
                                <Skeleton className="h-4 w-[200px]"/>
                                <Skeleton className="h-4 w-[100px]"/>
                            </div>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                        <div className="space-y-4">
                            <Skeleton className="aspect-square rounded-xl"/>
                            <div className="flex flex-col space-y-2">
                                <Skeleton className="h-4 w-[200px]"/>
                                <Skeleton className="h-4 w-[100px]"/>
                            </div>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                        <div className="space-y-4">
                            <Skeleton className="aspect-square rounded-xl"/>
                            <div className="flex flex-col space-y-2">
                                <Skeleton className="h-4 w-[200px]"/>
                                <Skeleton className="h-4 w-[100px]"/>
                            </div>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                        <div className="space-y-4">
                            <Skeleton className="aspect-square rounded-xl"/>
                            <div className="flex flex-col space-y-2">
                                <Skeleton className="h-4 w-[200px]"/>
                                <Skeleton className="h-4 w-[100px]"/>
                            </div>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                        <div className="space-y-4">
                            <Skeleton className="aspect-square rounded-xl"/>
                            <div className="flex flex-col space-y-2">
                                <Skeleton className="h-4 w-[200px]"/>
                                <Skeleton className="h-4 w-[100px]"/>
                            </div>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                        <div className="space-y-4">
                            <Skeleton className="aspect-square rounded-xl"/>
                            <div className="flex flex-col space-y-2">
                                <Skeleton className="h-4 w-[200px]"/>
                                <Skeleton className="h-4 w-[100px]"/>
                            </div>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Loading