"use client";

import React from "react";
import { priceFormatter } from "@/lib/utils";

type CurrencyProps = {
  value?: string | number;
};
const Currency = ({ value }: CurrencyProps) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div className="font-semibold">{priceFormatter.format(Number(value))}</div>
  );
};

export default Currency;
