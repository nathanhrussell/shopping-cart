import { Link, useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function Navbar() {
  const location = useLocation();
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <div className="bg-gray-800 text-white shadow w-full">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">
          <Link to="/">🛒 My Shop</Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className={`hover:underline ${
              location.pathname === "/" ? "underline" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={`hover:underline ${
              location.pathname === "/shop" ? "underline" : ""
            }`}
          >
            Shop
          </Link>
          {location.pathname === "/shop" && (
            <div className="ml-4 flex items-center space-x-3">
              <span className="text-sm">🛒 {itemCount} items</span>
              <button className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 text-sm">
                Go to Checkout
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
