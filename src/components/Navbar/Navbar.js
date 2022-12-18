import React, { useEffect, useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from "react-scroll";
import './Navbar.css';

const Navbar = () => {

    const [clicked, setClicked] = useState(false);
    const [screenHeight, setScreenHeight] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(()=>{
        setScreenHeight(window.innerHeight);
        const handleScroll = e => {
            if(window.scrollY < screenHeight-50){
                setScrollY(0);
            }
            else{
                setScrollY(window.scrollY);
            }
          };
      
          window.addEventListener('scroll', handleScroll); 
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[screenHeight])

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav className={scrollY ? "NavbarItems navbar-bg" :"NavbarItems"}>
            <h1 className="navbar-logo">CD</h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((items, index) => {
                    return (
                        <li key={index}>
                            <Link className={items.cName} to={items.url} smooth={true} duration={1000} >
                                {items.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );

}

export default Navbar;