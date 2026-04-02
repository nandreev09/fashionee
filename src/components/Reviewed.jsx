import data from "../products.json";

export default function Reviewed() {
  const products = data.products.slice(5, 8);
  return (
    <div className="reviewed-by-you">
      <div className="filter-title">Reviewed By You</div>
      <div className="reviewed">
        {products.map((product) => (
          <div key={product.id} className="reviewed-card">
            <div className="reviewed-image">
              <img
                src={product.image}
                alt={product.name}
                className="reviewed-img"
              />
            </div>
            <div className="reviewed-info">
              <h3 className="reviewed-name">{product.name}</h3>
              <div className="reviewed-pricing">
                {product.isSale && product.oldPrice ? (
                  <>
                    <span className="reviewed current-price">
                      ${product.price}
                    </span>
                    <span className="reviewed old-price">
                      ${product.oldPrice}
                    </span>
                  </>
                ) : (
                  <span className="reviewed current-price">
                    ${product.price}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
