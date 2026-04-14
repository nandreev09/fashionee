import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/"
        end
        style={{ marginLeft: "12px" }}
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.active : ""}`
        }
      >
        Shop
      </NavLink>
      <NavLink
        to="cart"
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.active : ""}`
        }
      >
        Cart
      </NavLink>
    </nav>
  );
}
