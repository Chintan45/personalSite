import React from 'react';
import Navbar from '../Navbar/Navbar';
import SocialMedia from '../SocialMedia';
import './LandingPage.css';


import img1 from '../../assets/my/IMG13.jpg';
import dots from '../../assets/dots.png';

const LandingPage = () => {

    return (
        <div className="banner" id="landingpage">
            <div className="circle"></div>
            <Navbar />
            <img src={img1} alt="chintandobariya" className="pic" draggable="false" loading="eager" />
            <h1 data-aos='left-fade-animation' className="intro">Hey! This is Chintan</h1>
            <div className="line-container">
                <div data-aos="right-fade-animation" className="line"></div>
                <p data-aos="fade-up" className="tagline">Web Developer</p>
            </div>
            <SocialMedia />
            <img src={dots} alt="dots" className="dots" draggable="false" loading="lazy" />
        </div>
    );
};

export default LandingPage;
