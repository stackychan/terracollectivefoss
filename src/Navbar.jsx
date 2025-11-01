import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Terra Collective</h1>
        <ul className="flex space-x-8 text-lg">
          <li><Link to="/" className="hover:text-green-300">Home</Link></li>
          <li><Link to="/shop" className="hover:text-green-300">Shop</Link></li>
          <li><Link to="/about" className="hover:text-green-300">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-green-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
