import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
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
        {/* Placeholder for cart info on /shop */}
      </div>
    </nav>
  );
}
