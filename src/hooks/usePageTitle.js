import { useLocation } from "react-router";
import { useMemo } from "react";
import { PAGES_NAME } from "../constants";

export function usePageTitle() {
  const location = useLocation();

  return useMemo(() => {
    switch (location.pathname) {
      case "/":
        return PAGES_NAME.SHOP;
      case "/cart":
        return PAGES_NAME.CART;
      default:
        return PAGES_NAME.SHOP;
    }
  }, [location.pathname]);
}
