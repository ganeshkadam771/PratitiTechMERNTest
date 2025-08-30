import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../pages/Sidebar";

export default function Dashboard() {
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/content")
      .then((res) => res.json())
      .then((data) => setContentList(data));
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <Link to="/generate">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Generate New Content
          </button>
        </Link>

        <div className="mt-6">
          <h3 className="font-semibold">Content History</h3>
          {contentList.length === 0 ? (
            <p className="text-gray-500">No content yet.</p>
          ) : (
            contentList.map((item) => (
              <div key={item.id} className="border p-2 my-2 rounded">
                <p>
                  <b>{item.type}</b>: {item.text}
                </p>
                <small className="text-gray-500">
                  {new Date(item.createdAt).toLocaleString()}
                </small>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
