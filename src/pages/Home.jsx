export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Shop</h1>
      <p className="text-lg text-gray-700 mb-6">
        Discover high-quality products at unbeatable prices. Whether you're
        looking for fashion, tech, or home goods, we've got something for
        everyone. Browse our shop and start building your cart today!
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-lg overflow-hidden shadow">
          <img
            src="imageplaceholder.com"
            alt="Placeholder 1"
            className="w-full h-auto"
          />
          <div className="p-4 text-center">Category One</div>
        </div>
        <div className="rounded-lg overflow-hidden shadow">
          <img
            src="imageplaceholder.com"
            alt="Placeholder 2"
            className="w-full h-auto"
          />
          <div className="p-4 text-center">Category Two</div>
        </div>
        <div className="rounded-lg overflow-hidden shadow">
          <img
            src="imageplaceholder.com"
            alt="Placeholder 3"
            className="w-full h-auto"
          />
          <div className="p-4 text-center">Category Three</div>
        </div>
      </div>
    </div>
  );
}
