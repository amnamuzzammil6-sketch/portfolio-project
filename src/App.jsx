import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" elements={<Home />} />
        <Route path="/blogs" elements={<Blogs />} />
        <Route path="/contact" elements={<Contact />} />
        <Route path="/about" elements={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
