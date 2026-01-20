import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Projects"; // Your Web Dev Projects
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import About from "./pages/About"; // Skills, Certs, Education combined

// Data Analytics Case Studies
import Bellabeat from "./pages/Case-studies/Bellabeat";
import CustomerSegmentation from "./pages/Case-studies/CustomerSegmentation"; // <--- NEW IMPORT

// Mini-Projects
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
        {/* Ensures the page scrolls to top when route changes */}
        <ScrollToTop key={location.pathname} />
        
        <Routes location={location}>
          {/* Main Navigation Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />

          {/* Data Analytics Case Studies */}
          <Route path="/case-studies/bellabeat" element={<Bellabeat />} />
          {/* NEW ROUTE ADDED BELOW */}
          <Route path="/case-studies/customer-segmentation" element={<CustomerSegmentation />} />

          {/* Individual Web App Routes */}
          <Route path="/weather" element={<Weather />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/counter" element={<Counter />} />

          {/* Fallback Route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;