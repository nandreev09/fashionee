import { DELIVERY_PRICE } from "../../constants/index.js";
import { useCart } from "../../context/cartcontext.jsx";
import styles from "./YourOrder.module.scss";

export default function YourOrder({ promoDiscount, promoCode }) {
  const { cartItems, getTotalPrice } = useCart();
  const subtotal = getTotalPrice();
  const discountValue = subtotal * promoDiscount;
  const total = subtotal - discountValue + DELIVERY_PRICE;

  const handleCheckout = () => {
    console.log("=== CHECKOUT DATA ===");

    console.log("Products:");
    cartItems.forEach((item) => {
      console.log(
        `${item.name} | qty: ${item.quantity} | price: $${item.price}`
      );
    });

    console.log("Promo code:", promoCode || "none");
    console.log("Discount for promocode:", promoDiscount);
    console.log("Final total:", total.toFixed(2));
  };
  return (
    <div className={styles.yourOrder}>
      <div className={styles.orderTitle}>Your Order</div>
      <div className={styles.productsOrder}>
        <div className={styles.orderPrice}>
          <div className={styles.orderText}>Order price</div>
          <div className={styles.price}>${subtotal.toFixed(2)}</div>
        </div>
        <div className={styles.discount}>
          <div className={styles.orderText}>Discount for promo code</div>
          <div className={styles.price}>
            {discountValue > 0 ? `-$${discountValue.toFixed(2)}` : "No"}
          </div>
        </div>
        <div className={styles.deliveryPrice}>
          <div className={styles.orderText}>Delivery</div>
          <div className={styles.price}>${DELIVERY_PRICE}</div>
        </div>
        <div className={styles.totalOrder}>
          <div className={styles.totalOrderText}>Total</div>
          <div className={styles.totalPrice}>${total.toFixed(2)}</div>
        </div>
      </div>
      <div className={styles.checkout}>
        <button onClick={handleCheckout} className={styles.checkoutBtn}>
          Checkout
        </button>
        <div className={styles.borderRight}></div>
      </div>
    </div>
  );
}
