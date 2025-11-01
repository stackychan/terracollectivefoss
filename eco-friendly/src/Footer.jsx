export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 px-8 md:px-20">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-3">Terra Collective</h3>
          <p className="text-gray-300 text-sm">
            Conscious choices for a cleaner planet.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">Follow Us</h3>
          <p className="text-gray-300 text-sm">Instagram | Twitter | LinkedIn</p>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs mt-10">
        © 2025 Terra Collective. All rights reserved.
      </p>
    </footer>
  );
}
