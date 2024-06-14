"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Color } from "@/types/color";
import { Size } from "@/types/size";
import Button from "@/components/ui/Button";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/IconButton";
import Filter from "@/components/filter/Filter";

interface MobileFilterProps {
  colors: Color[];
  sizes: Size[];
}

const MobileFilter = ({ colors, sizes }: MobileFilterProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="lg:hidden flex items-center gap-x-2">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        onClose={onClose}
        as="div"
        className="relative z-40 lg:hidden"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* dialog position */}
        <div className="fixed inset-0 z-40 ml-auto">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter data={sizes} name="Sizes" valueKey="sizeId" />
              <Filter data={colors} name="Colors" valueKey="colorId" />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilter;
