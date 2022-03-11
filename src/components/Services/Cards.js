import React, { useEffect } from 'react';
import AOS from 'aos';

import { ServiceItems } from './ServiceItems';
import './Service.css';

function Cards() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, [])
    return (
        <div className="container2">
            <div className="row">
                {ServiceItems.map((item, index) => {
                    return (
                        <div data-aos="fade-up" data-aos-delay={item.delay} data-aos-once="true" className="box" key={index}>
                            <img src={item.url} alt={item.title} className={item.cName} loading="lazy" draggable="false" />
                            <h4>{item.title}</h4>
                            <p>{item.discription}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Cards;
