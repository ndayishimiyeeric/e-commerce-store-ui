"use client";

import { useEffect, useState } from "react";
import PreviewModal from "@/components/PreviewModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
