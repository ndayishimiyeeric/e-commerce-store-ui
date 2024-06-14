"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return <Toaster />;
};

export default ToastProvider;
