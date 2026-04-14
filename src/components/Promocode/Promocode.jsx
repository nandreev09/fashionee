import ArrowOneImg from "../../assets/icons/arrow-1.svg";
import { useState } from "react";
import styles from "./Promocode.module.scss";

export default function Promocode({ applyPromo }) {
  const [value, setValue] = useState("");
  return (
    <div className={styles.promocode}>
      <div className={styles.promoTitleAndSubtitle}>
        <div className={styles.promoTitle}>You have a promo code?</div>
        <div className={styles.promoSubtitle}>
          To receive up-to-date promotional codes, subscribe to us on social
          networks.
        </div>
      </div>
      <div className={styles.inputPromo}>
        <input
          type="text"
          placeholder="Enter promo code"
          name="promo"
          onChange={(e) => setValue(e.target.value)}
        />
        <div className={styles.applyPromo}>
          <button onClick={() => applyPromo(value)} className={styles.promoBtn}>
            <img src={ArrowOneImg} alt="" />
          </button>
          <div className={styles.borderRight}></div>
        </div>
      </div>
    </div>
  );
}
