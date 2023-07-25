import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";
import {Product} from "@/types/product";
import toast from "react-hot-toast";

type CartStore = {
    items: Product[];
    addItem: (item: Product) => void;
    removeItem: (id: string) => void;
    removeAllItems: () => void;
}

const usePreviewModal = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (item: Product) => {
            const currentItems = get().items;
            const itemExists = currentItems.find((i) => i.id === item.id);

            if (itemExists) {
                return toast("Item already added to cart");
            }

            set({items: [...get().items, item]});
            toast.success("Item added to cart");
        },
        removeItem: (id: string) => {
            set({items: [...get().items.filter((i) => i.id !== id)]})
            toast.success("Item removed from cart");
        },
        removeAllItems: () => {
            set({items: []})
            toast.success("All items removed from cart");
        }
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage),
    })
)

export default usePreviewModal
