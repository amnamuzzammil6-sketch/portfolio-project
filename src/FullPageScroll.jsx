import React, { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

export default function FullPageScroll() {
  useEffect(() => {
    new fullpage("#fullpage", {
      autoScrolling: true,
      scrollHorizontally: true,
      navigation: true,
      navigationPosition: "right",
      scrollingSpeed: 800,
      easingcss3: "ease-in-out",
    });

    return () => fullpage.destroy("all");
  }, []);

  return (
    <div id="fullpage">
      <div className="section">
        <Home />
      </div>
      <div className="section">
        <Portfolio />
      </div>
      <div className="section">
        <Blogs />
      </div>
      <div className="section">
        <Contact />
      </div>
    </div>
  );
}
