import { useState } from "react";

export function useFilters(defaultFilters) {
  const [filters, setFilters] = useState(defaultFilters);
  const [tempFilters, setTempFilters] = useState(defaultFilters);

  const applyFilters = () => {
    setFilters(tempFilters);
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
    setTempFilters(defaultFilters);
  };

  return {
    filters,
    tempFilters,
    setFilters,
    setTempFilters,
    applyFilters,
    resetFilters,
  };
}
