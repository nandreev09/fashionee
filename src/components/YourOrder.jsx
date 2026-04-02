import { DELIVERY_PRICE } from "../constants/index.js";
import { useCart } from "../context/cartcontext.jsx";

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
    <div className="your-order">
      <div className="order-title">Your Order</div>
      <div className="products-order">
        <div className="order-price">
          <div className="order-text">Order price</div>
          <div className="price">${subtotal.toFixed(2)}</div>
        </div>
        <div className="discount">
          <div className="order-text">Discount for promo code</div>
          <div className="price">
            {discountValue > 0 ? `-$${discountValue.toFixed(2)}` : "No"}
          </div>
        </div>
        <div className="delivery-price">
          <div className="order-text">Delivery</div>
          <div className="price">${DELIVERY_PRICE}</div>
        </div>
        <div className="total-order">
          <div className="total-order-text">Total</div>
          <div className="total-price">${total.toFixed(2)}</div>
        </div>
      </div>
      <div className="checkout">
        <button onClick={handleCheckout} className="checkout-btn">
          Checkout
        </button>
        <div className="border-right"></div>
      </div>
    </div>
  );
}
