import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Data from './Data';
import About from './components/Aboutme/About';
import { Footer } from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import Portfolios from './components/Portfolios/Portfolios';
import Service from './components/Services/Service';

import './App.css';

function App() {

  var cls;
  const handleScroll = () => {
    var height = document.documentElement.scrollTop;
    (height > 400) ? cls = 'scroller' : cls = 'scroller-off';
    document.getElementById('tbtn').className = cls;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll])


  return (
    <div className="App" id="app">
      <Data />
      <LandingPage />
      <Service />
      <Portfolios />
      <About />
      <Footer />
      <div className={cls} id="tbtn" onClick={() => scroll.scrollToTop()}> ^ </div>
    </div>
  );
}

export default App;
