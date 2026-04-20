import styles from "./Filters.module.scss";

export default function ColorsFilter({
  availableColors = [],
  selectedColors = [],
  setColors,
}) {
  const handleChange = (color) => {
    if (selectedColors.includes(color)) {
      setColors(selectedColors.filter((c) => c !== color));
    } else {
      setColors([...selectedColors, color]);
    }
  };

  return (
    <div className={styles.colors}>
      <div className={styles.titleAndList}>

        <h1 className={styles.filterTitle}>Colors</h1>

        <form className={styles.checkboxList}>
          {availableColors.map((color) => (
            <div key={color} className={styles.checkbox}>

              <input
                type="checkbox"
                className={styles.checkboxInput}
                checked={selectedColors.includes(color)}
                onChange={() => handleChange(color)}
                id={color}
              />

              <label className={styles.checkboxLabel} htmlFor={color}>
                {color}
              </label>

            </div>
          ))}
        </form>
      </div>
    </div>
  );
}
