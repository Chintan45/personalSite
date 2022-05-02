import React, { useCallback, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import About from "../components/Aboutme/About";
import { Footer } from "../components/Footer/Footer";
import LandingPage from "../components/LandingPage/LandingPage";
import Portfolios from "../components/Portfolios/Portfolios";
import Service from "../components/Services/Service";

export default function HomePage() {
  var cls;

  const handleScroll = useCallback(() => {
    var height = document.documentElement.scrollTop;
    height > 400 ? (cls = "scroller") : (cls = "scroller-off");
    document.getElementById("tbtn").className = cls;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      <LandingPage />
      <Service />
      <Portfolios />
      <About />
      <Footer />
      <div className={cls} id="tbtn" onClick={() => scroll.scrollToTop()}>
        {" "}
        ^{" "}
      </div>
    </div>
  );
}
