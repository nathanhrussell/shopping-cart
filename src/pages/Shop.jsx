import { useEffect, useState } from "react";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const initialQuantities = {};
        data.forEach((product) => {
          initialQuantities[product.id] = 1;
        });
        setQuantities(initialQuantities);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", error);
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleQuantityChange = (productId, value) => {
    const number = Math.max(1, parseInt(value, 10) || 1);
    setQuantities((prev) => ({ ...prev, [productId]: number }));
  };

  const increment = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: prev[productId] + 1,
    }));
  };

  const decrement = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, prev[productId] - 1),
    }));
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <p className="text-lg text-gray-700">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <p className="text-lg text-red-600 font-semibold">
          {`Sorry, we couldn't load the products. Please try again later.`}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mb-4"
            />
            <h2 className="text-center font-semibold text-lg mb-2">
              {product.title}
            </h2>
            <p className="text-sm text-gray-600 text-center mb-4">
              ${product.price}
            </p>

            <div className="flex items-center mb-4 space-x-2">
              <button
                type="button"
                className="px-3 py-1 bg-gray-300 rounded text-black"
                onClick={() => decrement(product.id)}
              >
                –
              </button>
              <input
                type="number"
                value={quantities[product.id] || 1}
                onChange={(e) =>
                  handleQuantityChange(product.id, e.target.value)
                }
                className="w-12 text-center border border-gray-300 rounded"
                min="1"
              />
              <button
                type="button"
                className="px-3 py-1 bg-gray-300 rounded text-black"
                onClick={() => increment(product.id)}
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
