import styles from "./Filters.module.scss"

export default function PriceFilter({
  price,
  setPrice,
  minimumPrice,
  maximumPrice,
}) {
  const handleMinChange = (e) => {
    setPrice({ ...price, min: e.target.value });
  };

  const handleMaxChange = (e) => {
    setPrice({ ...price, max: e.target.value });
  };
  return (
    <div className={styles.price}>
      <h1 className={styles.filterTitle}>Price</h1>
      <div className={styles.priceFilter}>

        <input
          className={styles.priceInput}
          type="number"
          min="0"
          placeholder={`$${minimumPrice}`}
          value={price.min}
          onChange={handleMinChange}
        />

        <input
          className={styles.priceInput}
          type="number"
          min="0"
          placeholder={`$${maximumPrice}`}
          value={price.max}
          onChange={handleMaxChange}
        />

      </div>
    </div>
  );
}
