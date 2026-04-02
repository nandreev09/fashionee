import data from "../products.json";
import { useEffect } from "react";

import { useFavorites } from "../context/favoritescontext";
import { useCart } from "../context/cartcontext";

import favoriteIcon from "../assets/icons/heart.svg";
import { PRODUCTS_PER_PAGE } from "../constants";

import { Pagination } from "./Pagination";
import { Sort } from "./Sort";

import { useFilteredProducts } from "../hooks/useFilteredProducts";
import { useSortedProducts } from "../hooks/useSortedProducts";
import { usePagination } from "../hooks/usePagination";

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
      <div className="list-header">
        <h2 className="product-count">
          There are <strong>{filteredProducts.length}</strong> products in this
          category
        </h2>
        <Sort onSort={(e) => setSortValue(e.target.value)} value={sortValue} />
      </div>

      <div className="products-grid">
        {pageProducts.map((product) => {
          const quantity = getItemQuantity(product.id);
          const favorite = isFavorite(product.id);

          return (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
                <div className="product-badges">
                  {product.isNew && (
                    <span className="badge badge-new">NEW</span>
                  )}
                  {product.isSale && (
                    <span className="badge badge-sale">SALE</span>
                  )}
                </div>
                <img
                  className="card-favorite-icon"
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
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-pricing">
                  {product.isSale && product.oldPrice ? (
                    <>
                      <span className="current-price">${product.price}</span>
                      <span className="old-price">${product.oldPrice}</span>
                    </>
                  ) : (
                    <span className="current-price">${product.price}</span>
                  )}
                </div>
              </div>
              {quantity === 0 ? (
                <button className="buy-btn" onClick={() => addToCart(product)}>
                  Buy
                </button>
              ) : (
                <div className="quantity-selector">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                  >
                    -
                  </button>
                  <span className="quantity-number">{quantity}</span>
                  <button
                    className="quantity-btn"
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
