export default function Hero() {
  return (
    <section className="bg-green-50 flex flex-col md:flex-row items-center justify-between px-8 py-16 md:px-20">
      <div className="max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Sustainable & Eco-Friendly Living
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover consciously crafted products that are kind to the Earth — and to you.
        </p>
        <button className="bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition">
          Shop Now
        </button>
      </div>
      <img
        src="/assets/hero-eco.png"
        alt="eco products"
        className="w-full md:w-1/2 mt-10 md:mt-0 rounded-2xl shadow-lg"
      />
    </section>
  );
}
