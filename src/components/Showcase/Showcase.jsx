import saleImg from "../../assets/img/sale.svg";
import Search from "../Search/Search";
import Categories from "../Filters/CategoriesFilter";
import PriceFilter from "../Filters/PriceFilter";
import ColorsFilter from "../Filters/ColorsFilter";
import Reviewed from "../Reviewed/Reviewed";
import ProductList from "../ProductList/ProductList";
import data from "../../products.json";
import { useDebounce } from "../../hooks/useDebounce";
import { useFilters } from "../../hooks/useFilters";
import styles from "./Showcase.module.scss";

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
    <div className={styles.showcase}>
      <div className={styles.sitebar}>
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

        <button className={styles.apply} onClick={applyFilters}>
          <div className={styles.applyButton}>Apply Filter</div>
          <div className={styles.boderRight}></div>
        </button>

        <button className={styles.apply} onClick={resetFilters}>
          <div className={styles.applyButton}>Reset Filter</div>
          <div className={styles.boderRight}></div>
        </button>

        <Reviewed />
        <img className={styles.saleImg} src={saleImg} alt="" />
      </div>

      <div className={styles.products}>
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
