import React, { useEffect } from 'react';
// import { AboutItems } from './AboutItems'
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
                <div className='row'>
                    <div className="col-10 about_box">
                        <h2 data-aos="fade-up" data-aos-once="true" data-aos-delay="100">About me</h2>
                        <p data-aos="fade-up" data-aos-once="true" data-aos-delay="200">Hi there! My name is Chintan, and I'm a computer science student at the University of Illinois at Chicago. As a driven and passionate individual, I've always been interested in pursuing a career in software development.<br/><br/>
                            Over the past year, I've gained valuable experience in the field, working with the latest technologies such as React, Node, MongoDB, Express, MySQL, and CI/CD. My specialty lies in developing small to mid-sized web applications, and I take pride in delivering high-quality products that meet and exceed my clients' expectations.<br/><br/>
                            I'm proficient in a wide range of programming languages, including HTML/CSS/JS, Python, React, and Node. As a developer, I'm committed to staying up-to-date with the latest trends and best practices in the industry, and I'm always looking for ways to improve my skills and knowledge.<br/><br/>
                            If you're looking for a skilled and dedicated developer to help bring your vision to life, look no further! I'm excited about the prospect of working with you and bringing my expertise to your project. Let's create something amazing together.<br/>
                        </p>
                        <a href="https://drive.google.com/file/d/1x2UopXCzYOOwZGo9eJEshYclo7vwGAWz/view?usp=sharing"
                            rel="noopener noreferrer" data-aos="fade-up" data-aos-once="true" data-aos-delay="300" target="_blank"
                        >
                            <button className="dbtn" data-aos="fade-up"
                                data-aos-once="true"
                                data-aos-delay="300">
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;