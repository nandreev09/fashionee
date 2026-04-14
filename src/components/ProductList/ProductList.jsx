import data from "../../products.json";
import { useEffect } from "react";

import { useFavorites } from "../../context/favoritescontext";
import { useCart } from "../../context/cartcontext";

import favoriteIcon from "../../assets/icons/heart.svg";
import { PRODUCTS_PER_PAGE } from "../../constants";

import { Pagination } from "../Pagination/Pagination";
import { Sort } from "../Sort/Sort";

import { useFilteredProducts } from "../../hooks/useFilteredProducts";
import { useSortedProducts } from "../../hooks/useSortedProducts";
import { usePagination } from "../../hooks/usePagination";
import styles from "./ProductList.module.scss";

export default function ProductList({ search, colors, categories, price }) {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  const filteredProducts = useFilteredProducts(data.products, {
    search,
    colors,
    categories,
    price,
  });

  const { sortedProducts, sortValue, setSortValue } =
    useSortedProducts(filteredProducts);

  const {
    currentItems: pageProducts,
    currentPage,
    setCurrentPage,
    totalPages,
  } = usePagination(sortedProducts, PRODUCTS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, colors, categories, price, setCurrentPage]);

  return (
    <div className="product-list-container">
      <div className={styles.listHeader}>
        <h2 className={styles.productCount}>
          There are <strong>{filteredProducts.length}</strong> products in this
          category
        </h2>
        <Sort onSort={(e) => setSortValue(e.target.value)} value={sortValue} />
      </div>

      <div className={styles.productsGrid}>
        {pageProducts.map((product) => {
          const quantity = getItemQuantity(product.id);
          const favorite = isFavorite(product.id);

          return (
            <div key={product.id} className="product-card">
              <div className={styles.productImage}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImg}
                />
                <div className={styles.productBadges}>
                  {product.isNew && (
                    <span className={`${styles.badge}${styles.badgeNew}`}>
                      NEW
                    </span>
                  )}
                  {product.isSale && (
                    <span className={`${styles.badge}${styles.badgeSale}`}>
                      SALE
                    </span>
                  )}
                </div>
                <img
                  className={styles.cardFavoriteIcon}
                  src={favoriteIcon}
                  alt="Add to favorites"
                  onClick={() => toggleFavorite(product.id)}
                  style={{
                    cursor: "pointer",
                    filter: favorite
                      ? "invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)"
                      : "none",
                  }}
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.productPricing}>
                  {product.isSale && product.oldPrice ? (
                    <>
                      <span className={styles.currentPrice}>
                        ${product.price}
                      </span>
                      <span className={styles.oldPrice}>
                        ${product.oldPrice}
                      </span>
                    </>
                  ) : (
                    <span className={styles.currentPrice}>
                      ${product.price}
                    </span>
                  )}
                </div>
              </div>
              {quantity === 0 ? (
                <button
                  className={styles.buyBtn}
                  onClick={() => addToCart(product)}
                >
                  Buy
                </button>
              ) : (
                <div className={styles.quantitySelector}>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                  >
                    -
                  </button>
                  <span className={styles.quantityNumber}>{quantity}</span>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Pagination
        totalPages={totalPages}
        changeCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
