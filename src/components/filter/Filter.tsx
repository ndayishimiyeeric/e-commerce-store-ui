"use client"

import {useRouter, useSearchParams} from "next/navigation";
import {Size} from "@/types/size";
import {Color} from "@/types/color";
import qs from "query-string";
import Button from "@/components/ui/Button";
import {cn} from "@/lib/utils";

interface FilterProps {
    data: (Size | Color)[];
    name: string;
    valueKey: string;
}

const Filter = ({data, valueKey, name}: FilterProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const onClick = (id: string) => {
        const currentUrl = qs.parse(searchParams.toString());

        const query = {
            ...currentUrl,
            [valueKey]: id,
        }

        // remove the query if the id is the same as the selected value
        if (currentUrl[valueKey] === id) {
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, {skipNull: true});

        router.push(url);
    }

    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold">{name}</h3>

            <hr className='my-4'/>

            <div className="flex flex-wrap gap-2">
                {data.map((item) => (
                    <div key={item.id} className="flex items-center">
                        <Button
                            className={cn(
                                `rounded-md text-sm text-gray-800 p-2 bg-white
                                       border border-gray-300`,
                                       selectedValue === item.id && `bg-black text-white`
                            )}
                            onClick={() => onClick(item.id)}
                        >
                            {item.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Filter;
