import React from "react";
import { SORT_FILTER_KEYS } from "../constants";

export const Sort = ({ onSort, value }) => (
  <select
    className="sorting-controls"
    name=""
    id=""
    onChange={onSort}
    value={value}
  >
    <option value={SORT_FILTER_KEYS.NAME_ASC}>Sort by A-Z</option>
    <option value={SORT_FILTER_KEYS.NAME_DESC}>Sort by Z-A</option>
    <option value={SORT_FILTER_KEYS.PRICE_ASC}>
      From low price to high price
    </option>
    <option value={SORT_FILTER_KEYS.PRICE_DESC}>
      From high price to low price
    </option>
  </select>
);
