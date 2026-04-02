import { useState, useMemo } from "react";

export function usePagination(items, perPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / perPage);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return items.slice(start, start + perPage);
  }, [items, currentPage, perPage]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
  };
}
