import searchIcon from "../../assets/icons/search.svg";
import styles from "./Search.module.scss";

export default function Search({ search, setSearch }) {
  return (
    <div className={styles.search}>
      <div className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
}
