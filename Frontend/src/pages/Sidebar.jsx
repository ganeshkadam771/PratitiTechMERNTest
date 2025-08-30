import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 h-screen bg-white border-r shadow-sm p-4 flex flex-col">
      {/* Profile Circle */}
      <div className="w-12 h-12 rounded-full bg-gray-300 mb-6"></div>

      {/* Menu */}
      <Link
        to="/generate"
        className="bg-black text-white px-3 py-2 rounded mb-4 text-center"
      >
        + New Content
      </Link>

      <ul className="space-y-3 text-black">
        <li>
          <Link to="/dashboard" className="hover:text-blue-500">
            Templates
          </Link>
        </li>
        <li>
          <span className="text-gray-700">English</span>
        </li>
      </ul>
    </div>
  );
}
