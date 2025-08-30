import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Generate from "./pages/Generate";
import Navbar from "./pages/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/generate" element={<Generate />} />

          <Route
            path="/about"
            element={<div className="p-6">About Page</div>}
          />
          <Route path="/help" element={<div className="p-6">Help Page</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
