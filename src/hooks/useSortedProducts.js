import { useState, useMemo } from "react";

export function useSortedProducts(products) {
  const [sortValue, setSortValue] = useState("NAME_ASC");

  const sortedProducts = useMemo(() => {
    const result = [...products];

    switch (sortValue) {
      case "NAME_ASC":
        result.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;
      case "NAME_DESC":
        result.sort((a, b) => (a.name < b.name ? 1 : -1));
        break;
      case "PRICE_ASC":
        result.sort((a, b) => (a.price > b.price ? 1 : -1));
        break;
      case "PRICE_DESC":
        result.sort((a, b) => (a.price < b.price ? 1 : -1));
        break;
    }

    return result;
  }, [products, sortValue]);

  return { sortedProducts, sortValue, setSortValue };
}
