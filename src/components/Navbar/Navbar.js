import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from "react-scroll";
import './Navbar.css';

const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav className="NavbarItems">
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