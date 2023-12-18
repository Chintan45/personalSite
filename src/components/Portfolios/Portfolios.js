import React, { useEffect } from 'react';
import AOS from 'aos';

import './Portfolios.css';
const Portfolios = () => {
    useEffect(() => {
        AOS.init({ duration: 800 })
    }, [])
    return (
        <div id="projects">
            <div className="bg">
                <div className="container">
                    <div className="row porfolio-row">
                        <p className="portfolio-p" data-aos="fade-up" data-aos-once="true">P O R T F O L I O S</p>
                        <h3 className="portfolio-h3" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">Some of my awesome<br /> stuffs here</h3>
                    </div>
                </div>

                <div className="container con2">
                    <div className="row">
                        <div className="col-xl-5 col-md-6">
                            <div data-aos="zoom-in-up" data-aos-delay="200" data-aos-once="true" className="portfolio-thumb">
                                <div className="p-img i1"></div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-6">
                            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-once="true" className="portfolio-thumb">
                                <div className="p-img i2"></div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-once="true" className="portfolio-thumb">
                                <div className="p-img i3"></div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div data-aos="zoom-in-up" data-aos-delay="500" data-aos-once="true" className="portfolio-thumb">
                                <div className="p-img i4"></div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div data-aos="zoom-in-up" data-aos-delay="800" data-aos-once="true" className="portfolio-thumb">
                                <div className="p-img i5"></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="bg2"></div>
        </div>
    );
};

export default Portfolios;
