import React, { useEffect } from 'react';
import { AboutItems } from './AboutItems'
import bdots from '../../assets/color_grid.png';
import AOS from 'aos';

import './About.css';

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 800 })
    }, [])

    return (
        <div className="about" id="about">
            <div className="container">
                <img src={bdots} alt="dots" className="bdots" loading="lazy" draggable="false" />
                <span className="l-about" data-aos="fade-right" data-aos-once="true">About</span>
                <div className="col-xl-5 col-md-6 about_box">
                    <h2 data-aos="fade-up" data-aos-once="true" data-aos-delay="100">About me</h2>
                    <p data-aos="fade-up" data-aos-once="true" data-aos-delay="200">Hard-working computer science student. Seeking a continuous learning workflow in multitasking
                        environment which deals with current Technology where I can improve my technical and
                        interpersonal skills for my personal growth as well as the growth of company.
                    </p>
                    <a href="https://drive.google.com/file/d/1iSB9_sfUFc1xCvIJf1ViRqWp0l1r4vOf/view?usp=sharing"
                        rel="noopener noreferrer"
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-delay="300"
                        target="_blank"
                    >
                        <button className="dbtn" data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-delay="300">
                            Download CV
                        </button>
                    </a>
                </div>
                <div className="col-xl-3 col-md-3 a-img" data-aos="fade-left" data-aos-delay="100" data-aos-once="true"></div>
            </div>
            {/* <div className="container">
                <div className="f-row">
                    {AboutItems.map((items, index) => {
                        return (
                            <div className="col-xl-4 col-md-4 f-box" data-aos="fade-up" data-aos-delay={items.delay} data-aos-once="true" key={index}>
                                <h3>{items.digit}</h3>
                                <p>{items.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div> */}
        </div>
    );
}

export default About;