import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../pages/Sidebar";

export default function Generate() {
  const [type, setType] = useState("Blog");
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, text: prompt }),
    });
    navigate("/dashboard");
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold mb-6">Generate New Content</h2>

        <div className="mb-6">
          <p className="font-semibold mb-2">Select Content Type</p>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="contentType"
                value="Blog"
                checked={type === "Blog"}
                onChange={(e) => setType(e.target.value)}
              />
              <span>Blog Post</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="contentType"
                value="Instagram Caption"
                checked={type === "Instagram Caption"}
                onChange={(e) => setType(e.target.value)}
              />
              <span>Instagram Caption</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="contentType"
                value="Email"
                checked={type === "Email"}
                onChange={(e) => setType(e.target.value)}
              />
              <span>Email Newsletter</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="contentType"
                value="Product Description"
                checked={type === "Product Description"}
                onChange={(e) => setType(e.target.value)}
              />
              <span>Product Description</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <p className="font-semibold mb-2">Enter Prompt Details</p>
          <textarea
            className="border w-full p-3 rounded"
            rows="5"
            placeholder="E.g., Write a blog about the future of AI in healthcare..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save Content
        </button>
      </div>
    </div>
  );
}
