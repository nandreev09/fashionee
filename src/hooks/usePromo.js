import { DISCOUNT_VALUE } from "../constants";
import { useState } from "react";
import { PROMOCODE } from "../constants";

export function usePromo() {
  const [promoCode, setPromocode] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyPromo = (code) => {
    const normalized = code.trim().toLowerCase();

    setPromocode(normalized);

    if (normalized === PROMOCODE) {
      setDiscount(DISCOUNT_VALUE);
    } else {
      setDiscount(0);
    }
  };

  return { promoCode, discount, applyPromo };
}
