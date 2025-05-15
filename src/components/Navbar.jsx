import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="bg-gray-800 text-white shadow w-full">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
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
        </div>
      </nav>
    </div>
  );
}
