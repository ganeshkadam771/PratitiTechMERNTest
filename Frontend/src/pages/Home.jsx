import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">
        Create content 10x faster with AI
      </h1>
      <p className="mb-2">Write blogs, posts, and emails in seconds</p>
      <Link to="/dashboard">
        <button className="bg-black text-white px-6 py-2 rounded">
          Try for Free
        </button>
      </Link>
    </div>
  );
}
