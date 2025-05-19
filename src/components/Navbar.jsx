import { Link, useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function Navbar() {
  const location = useLocation();
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  const isShopPage = location.pathname === "/shop";

  return (
    <div className="bg-gray-800 text-white shadow w-full">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">
          <Link to="/" data-testid="nav-home-link">
            Home
          </Link>
          <Link to="/shop" data-testid="nav-shop-link">
            🛒 My Shop
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className={`hover:underline ${!isShopPage ? "underline" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={`hover:underline ${!isShopPage ? "underline" : ""}`}
          >
            Shop
          </Link>
          {isShopPage && (
            <div className="ml-4 flex items-center space-x-3">
              <span className="text-sm">🛒 {itemCount} items</span>
              <button
                type="button"
                className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 text-sm"
              >
                Go to Checkout
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {};
