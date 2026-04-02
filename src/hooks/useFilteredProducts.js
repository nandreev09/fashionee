import { useMemo } from "react";

export function useFilteredProducts(
  products,
  { search, colors, categories, price }
) {
  return useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesColor =
        colors.length === 0 || colors.includes(product.color);

      const matchesCategory =
        categories.length === 0 ||
        categories.includes("All") ||
        product.categories.some((cat) => categories.includes(cat));

      const matchesPrice =
        (!price.min || product.price >= Number(price.min)) &&
        (!price.max || product.price <= Number(price.max));

      return matchesSearch && matchesColor && matchesCategory && matchesPrice;
    });
  }, [products, search, colors, categories, price]);
}
