import data from "../../products.json";
import styles from "./Reviewed.module.scss";

export default function Reviewed() {
  const products = data.products.slice(5, 8);
  return (
    <div>
      <div className={styles.filterTitle}>Reviewed By You</div>
      <div className={styles.reviewed}>
        {products.map((product) => (
          <div key={product.id} className={styles.reviewedCard}>
            <div className={styles.reviewedImage}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.reviewedImg}
              />
            </div>
            <div className={styles.reviewedInfo}>
              <h3 className={styles.reviewedName}>{product.name}</h3>
              <div className={styles.reviewedPricing}>
                {product.isSale && product.oldPrice ? (
                  <>
                    <span className={styles.currentPrice}>
                      ${product.price}
                    </span>
                    <span className={styles.oldPrice}>${product.oldPrice}</span>
                  </>
                ) : (
                  <span className={styles.currentPrice}>${product.price}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
