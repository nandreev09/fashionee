import saleImg from "../assets/img/sale.svg";
import Search from "./Search";
import Categories from "./CategoriesFilter";
import PriceFilter from "./PriceFilter";
import ColorsFilter from "./ColorsFilter";
import Reviewed from "./Reviewed";
import ProductList from "./ProductList";
import data from "../products.json";
import { useDebounce } from "../hooks/useDebounce";
import { useFilters } from "../hooks/useFilters";

const colors = data.products.map((c) => c.color);
const uniqueColors = [...new Set(colors)];

const categories = data.products.flatMap((c) => c.categories);
const categoriesToShow = ["All", ...new Set(categories)];

const prices = data.products.map((p) => p.price);
const minPrice = Math.min(...prices);
const maxPrice = Math.max(...prices);

export default function Showcase() {
  const defaultFilters = {
    search: "",
    colors: [],
    categories: [],
    price: { min: "", max: "" },
  };

  const {
    filters,
    tempFilters,
    setFilters,
    setTempFilters,
    applyFilters,
    resetFilters,
  } = useFilters(defaultFilters);

  const debouncedSearch = useDebounce(filters.search, 300);

  return (
    <div className="showcase">
      <div className="sitebar">
        <Search
          search={filters.search}
          setSearch={(value) =>
            setFilters((prev) => ({ ...prev, search: value }))
          }
        />

        <Categories
          availableCategories={categoriesToShow}
          selectedCategories={tempFilters.categories}
          setCategories={(categories) =>
            setTempFilters((prev) => ({ ...prev, categories }))
          }
        />

        <PriceFilter
          minimumPrice={minPrice}
          maximumPrice={maxPrice}
          price={tempFilters.price}
          setPrice={(price) => setTempFilters((prev) => ({ ...prev, price }))}
        />

        <ColorsFilter
          availableColors={uniqueColors}
          selectedColors={tempFilters.colors}
          setColors={(colors) =>
            setTempFilters((prev) => ({ ...prev, colors }))
          }
        />

        <button className="apply" onClick={applyFilters}>
          <div className="apply-button">Apply Filter</div>
          <div className="border-right"></div>
        </button>

        <button className="apply" onClick={resetFilters}>
          <div className="apply-button">Reset Filter</div>
          <div className="border-right"></div>
        </button>

        <Reviewed />
        <img className="sale-img" src={saleImg} alt="" />
      </div>

      <div className="products">
        <ProductList
          search={debouncedSearch}
          colors={filters.colors}
          categories={filters.categories}
          price={filters.price}
        />
      </div>
    </div>
  );
}
