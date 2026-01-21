import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/Notfound";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* NAVBAR */}
        <Navbar />

        {/* MIDDLE LAYOUT */}
        <div className="flex flex-1">
          {/* SIDEBAR */}
          <Sidebar />

          {/* PAGE CONTENT */}
          <main className="flex-1 p-6 bg-gray-100">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/how-it-works" element={<HowItWorks />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
