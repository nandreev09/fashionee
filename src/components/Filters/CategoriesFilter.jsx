import BG_ICON from "../../assets/icons/bg.svg";
import LINE_ICON from "../../assets/icons/line.svg";
import styles from "./Filters.module.scss";

export default function Categories({
  availableCategories,
  selectedCategories,
  setCategories,
}) {
  const handleClick = (category) => {
    if (category === "All") {
      setCategories(["All"]);
    } else {
      const filtered = selectedCategories.filter((c) => c !== "All");
      if (filtered.includes(category)) {
        setCategories(filtered.filter((c) => c !== category));
      } else {
        setCategories([...filtered, category]);
      }
    }
  };
  return (
    <div className={styles.categories}>

      <h1 className={styles.filterTitle}>Categories</h1>
      
      <ul className={styles.categoriesList}>
        {availableCategories.map((category) => (
          <div key={category} className={styles.categorieString}>

            <img
              src={selectedCategories.includes(category) ? LINE_ICON : BG_ICON}
              alt=""
            />

            <li
              className={`${styles.categorie} ${
                selectedCategories.includes(category) ? styles.active : ""
              }`}
              onClick={() => handleClick(category)}
            >
              {category}
            </li>

          </div>
        ))}
      </ul>
    </div>
  );
}
