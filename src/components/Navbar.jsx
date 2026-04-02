import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        end
        style={{ marginLeft: "12px" }}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Shop
      </NavLink>
      <NavLink
        to="cart"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Cart
      </NavLink>
    </nav>
  );
}
