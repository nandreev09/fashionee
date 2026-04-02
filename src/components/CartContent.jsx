import { useState } from "react";
import { useCart } from "../context/cartcontext.jsx";
import CartItems from "./CartItems.jsx";
import { DISCOUNT_VALUE } from "../constants";
import Promocode from "./Promocode.jsx";
import YourOrder from "./YourOrder.jsx";

export default function CartContent() {
  const { cartItems } = useCart();
  const [promoCode, setPromocode] = useState("");
  const [discount, setDiscount] = useState(0)

  const applyPromo = (code) => {
    const normalized = code.trim().toLowerCase();

    setPromocode(normalized)

    if (normalized === "ilovereact") {
      setDiscount(DISCOUNT_VALUE);
    } else {
      setDiscount(0);
    }
  };

  return (
    <div className="cart-content">
      <div className="product-and-order">
        <div className="products-window">
          <CartItems />
          <div className="product-list-border"></div>
        </div>
        {cartItems.length > 0 && <YourOrder promoDiscount={discount} promoCode={promoCode} />}
      </div>
      <Promocode applyPromo={applyPromo} />
      <div className="socials">
        <div className="find-us">Find us here:</div>
        <div className="social-list">
          <div className="social">FB</div>
          <div className="space-line"></div>
          <div className="social">TW</div>
          <div className="space-line"></div>
          <div className="social">INS</div>
          <div className="space-line"></div>
          <div className="social">PT</div>
        </div>
      </div>
    </div>
  );
}
