import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Todo from "./work/Todo";

import ScrollToTop from "./ScrollToTop";
import Calculator from "./work/Calculator";
import Weather from "./work/Weather";
import Counter from "./work/Counter";
function App() {
  const location = useLocation();

  return (
    <div className="app-layout">
      <Navbar />
      <main className="content">
        <ScrollToTop key={location.pathname} />
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
