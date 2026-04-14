import { useCart } from "../../context/cartcontext";
import styles from "./CartItems.module.scss";

export default function CartItems() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  return (
    <div className={styles.productList}>
      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className={styles.product}>
            <div className={styles.productImageCart}>
              <img
                className={styles.productImageCart__img}
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className={styles.productInfo}>
              <div className={styles.productTitle}>{item.name}</div>
              <div className={styles.productPrice}>
                <div className={styles.priceAndQuantity}>
                  <div className={styles.priceAndQuantity__price}>
                    <div className={styles.oldCurrentPrice}>
                      {item.isSale && item.oldPrice && (
                        <div className={styles.oldPriceCart}>
                          ${item.oldPrice}
                        </div>
                      )}
                      <div className={styles.currentPriceCart}>
                        ${item.price}
                      </div>
                    </div>
                  </div>
                  <div className={styles.quantity}>
                    <button
                      className={styles.quantityBtn}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className={styles.quantityNumber}>
                      {item.quantity}
                    </span>
                    <button
                      className={styles.quantityBtn}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={styles.totalProductPrice}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
            <button
              className={styles.removeBtn}
              onClick={() => removeFromCart(item.id)}
            >
              Х
            </button>
          </div>
        ))
      )}
    </div>
  );
}
