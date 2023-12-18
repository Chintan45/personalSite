import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SocialMedia from '../SocialMedia';
import './LandingPage.css';


import img1 from '../../assets/my/IMG13.jpg';
import dots from '../../assets/dots.png';

const LandingPage = () => {
    const [screenHeight, setScreenHeight] = useState(0);
    
    useEffect(()=>{
        setScreenHeight(window.innerHeight);
    },[screenHeight])


    return (
        <div className="banner" id="landingpage" style={{ height: screenHeight}}>
            <div className="circle"></div>
            <Navbar />
            <img src={img1} alt="chintandobariya" className="pic" draggable="false" loading="eager" />
            <h3 data-aos='left-fade-animation' className="intro">Hi, I'm Chintan Dobariya</h3>
            <div className="line-container">
                <div data-aos="right-fade-animation" className="line"></div>
                <p data-aos="fade-up" className="tagline">CS Grad Student</p>
            </div>
            <SocialMedia />
            <img src={dots} alt="dots" className="dots" draggable="false" loading="lazy" />
        </div>
    );
};

export default LandingPage;
