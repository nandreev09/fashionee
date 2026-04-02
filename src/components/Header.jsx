import { useFavorites } from "../context/favoritescontext.jsx";
import { useCart } from "../context/cartcontext.jsx";
import logoIcon from "../assets/icons/logo.svg";
import vectorIcon from "../assets/icons/vector.svg";
import searchIcon from "../assets/icons/search.svg";
import userIcon from "../assets/icons/user.svg";
import favoritesIcon from "../assets/icons/heart.svg";
import shoppingbagIcon from "../assets/icons/shopping-bag.svg";
import { NavLink } from "react-router";

export default function Header() {
  const { favoritesCount } = useFavorites();
  const { getTotalItems } = useCart();

  return (
    <div className="header">
      <div className="burger-and-menu">
        <div className="burger">
          <div className="burger-icon">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <img className="logo" src={logoIcon} alt="" />
        </div>
        <div className="menu">
          <div className="menu-item">Home</div>
          <div className="pages">
            <div className="menu-item">Pages</div>
            <img src={vectorIcon} alt="" />
          </div>
          <div className="shop">
            <div className="menu-item">Shop</div>
            <img src={vectorIcon} alt="" />
          </div>
          <div className="menu-item">Blog</div>
          <div className="menu-item">Contact</div>
        </div>
      </div>

      <div className="icons">
        <div className="icon">
          <img src={searchIcon} alt="" />
        </div>
        <div className="icon">
          <img src={userIcon} alt="" />
        </div>
        <div className="favorites">
          <img src={favoritesIcon} alt="" />
          <div className="favorites-amount">{favoritesCount}</div>
        </div>
        <NavLink to="cart">
          <div className="shopping-bag">
            <img src={shoppingbagIcon} alt="" />
            <div className="shopping-bag-amount">{getTotalItems()}</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
