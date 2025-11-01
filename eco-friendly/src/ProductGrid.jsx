const products = [
  {
    name: "Beeswax Wraps",
    price: "₹499",
    image: "/assets/beeswax.jpg",
  },
  {
    name: "Bamboo Utensil Kit",
    price: "₹699",
    image: "/assets/bamboo-kit.jpg",
  },
  {
    name: "Solid Shampoo Bar",
    price: "₹399",
    image: "/assets/shampoo-bar.jpg",
  },
  {
    name: "Recycled Tote Bag",
    price: "₹299",
    image: "/assets/tote-bag.jpg",
  },
];

export default function ProductGrid() {
  return (
    <section className="px-8 md:px-20 py-16 bg-white">
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
        Our Eco-Friendly Bestsellers
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {products.map((p) => (
          <div
            key={p.name}
            className="border rounded-2xl p-4 hover:shadow-lg transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
            <p className="text-green-700 font-bold">{p.price}</p>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg w-full hover:bg-green-800">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
