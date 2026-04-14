import { useCart } from "../../context/cartcontext.jsx";
import CartItems from "../CartItems/CartItems.jsx";
import Promocode from "../Promocode/Promocode.jsx";
import YourOrder from "../YourOrder/YourOrder.jsx";
import { usePromo } from "../../hooks/usePromo.js";
import styles from "./CartContent.module.scss";

export default function CartContent() {
  const { cartItems } = useCart();

  const { promoCode, discount, applyPromo } = usePromo();

  return (
    <div className={styles.cartContent}>
      <div className={styles.productAndOrder}>
        <div className={styles.productsWindow}>
          <CartItems />
          <div className={styles.productListBorder}></div>
        </div>
        {cartItems.length > 0 && (
          <YourOrder promoDiscount={discount} promoCode={promoCode} />
        )}
      </div>
      <Promocode applyPromo={applyPromo} />
      <div className={styles.socials}>
        <div className={styles.findUs}>Find us here:</div>
        <div className={styles.socialList}>
          <div>FB</div>
          <div className={styles.spaceLine}></div>
          <div>TW</div>
          <div className={styles.spaceLine}></div>
          <div>INS</div>
          <div className={styles.spaceLine}></div>
          <div>PT</div>
        </div>
      </div>
    </div>
  );
}
