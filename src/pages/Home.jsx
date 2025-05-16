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
          <div className="h-48 w-full overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Headphones"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 text-center">Audio Gear</div>
        </div>

        <div className="rounded-lg overflow-hidden shadow">
          <div className="h-48 w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1739444929408-a1f782b8e3ee?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Trainers"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 text-center">Footwear</div>
        </div>

        <div className="rounded-lg overflow-hidden shadow">
          <div className="h-48 w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Watch"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 text-center">Accessories</div>
        </div>
      </div>
    </div>
  );
}
