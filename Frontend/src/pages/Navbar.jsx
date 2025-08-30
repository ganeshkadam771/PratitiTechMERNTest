import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-black">
        HO
      </Link>

      {/* Links */}
      <div className="space-x-6">
        <Link to="/" className="text-black hover:text-blue-500">Home</Link>
        <Link to="/about" className="text-black hover:text-blue-500">About</Link>
        <Link to="/help" className="text-black hover:text-blue-500">Help</Link>
      </div>
    </nav>
  );
}
