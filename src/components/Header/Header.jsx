import { useFavorites } from "../../context/favoritescontext.jsx";
import { useCart } from "../../context/cartcontext.jsx";
import logoIcon from "../../assets/icons/logo.svg";
import vectorIcon from "../../assets/icons/vector.svg";
import searchIcon from "../../assets/icons/search.svg";
import userIcon from "../../assets/icons/user.svg";
import favoritesIcon from "../../assets/icons/heart.svg";
import shoppingbagIcon from "../../assets/icons/shopping-bag.svg";
import { NavLink } from "react-router";
import styles from "./Header.module.scss";

export default function Header() {
  const { favoritesCount } = useFavorites();
  const { getTotalItems } = useCart();

  return (
    <div className={styles.header}>
      <div className={styles.burgerAndMenu}>
        <div className={styles.burger}>
          <div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <img className={styles.logo} src={logoIcon} alt="" />
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItem}>Home</div>
          <div className={styles.pages}>
            <div>Pages</div>
            <img src={vectorIcon} alt="" />
          </div>
          <div className={styles.shop}>
            <div>Shop</div>
            <img src={vectorIcon} alt="" />
          </div>
          <div className={styles.menuItem}>Blog</div>
          <div className={styles.menuItem}>Contact</div>
        </div>
      </div>

      <div className={styles.icons}>
        <div className={styles.icon}>
          <img src={searchIcon} alt="" />
        </div>
        <div className={styles.icon}>
          <img src={userIcon} alt="" />
        </div>
        <div className={styles.favorites}>
          <img src={favoritesIcon} alt="" />
          <div className={styles.favoritesAmount}>{favoritesCount}</div>
        </div>
        <NavLink to="cart">
          <div className={styles.shoppingBag}>
            <img src={shoppingbagIcon} alt="" />
            <div className={styles.shoppingBagAmount}>{getTotalItems()}</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
