import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { FavoritesProvider } from "./context/favoritescontext.jsx";
import { CartProvider } from "./context/cartcontext.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <FavoritesProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </FavoritesProvider>
);
