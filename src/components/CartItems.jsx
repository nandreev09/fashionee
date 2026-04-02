import { useCart } from "../context/cartcontext";

export default function CartItems() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="product-list">
      {cartItems.length === 0 ? (
        <div className="empty-cart">Your cart is empty</div>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="product">
            <div className="product-image-cart">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="product-info">
              <div className="product-title">{item.name}</div>
              <div className="product-price">
                <div className="price-and-quantity">
                  <div className="price">
                    <div className="old-current-price">
                      {item.isSale && item.oldPrice && (
                        <div className="old-price-cart">${item.oldPrice}</div>
                      )}
                      <div className="current-price-cart">${item.price}</div>
                    </div>
                  </div>
                  <div className="quantity">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="quantity-number">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="total-product-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
            <button
              className="remove-btn"
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
