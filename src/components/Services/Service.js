import React, { useEffect } from 'react';
import AOS from 'aos';
import Cards from './Cards';

import './Service.css';

const Service = () => {
    useEffect(() => {
        AOS.init({ duration: 800 })
    }, [])
    return (
        <div className="container1" id="service">
            <div data-aos="fade-down" data-aos-delay="0" data-aos-once="true" className="v-line" />
            <div data-aos="fade-down" data-aos-delay="300" data-aos-once="true" className="s-header">S E R V I C E &nbsp;&nbsp; &nbsp;P R O V I D E D</div>
            <h2 data-aos="fade-down" data-aos-delay="600" data-aos-once="true" className="s-title">Build brands campaigns <br />& digital projects</h2>
            <Cards />
        </div>
    );
}

export default Service;
