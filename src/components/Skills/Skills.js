import React, { useEffect } from 'react';
import AOS from 'aos';

import './Skills.css';


const Skills = () => {

    useEffect(() => {
        AOS.init({ duration: 800 })
    }, [])

    return(
        <div className="skills" id="skills">
            <div className='container'>
                <span className="l-skills" data-aos="fade-right" data-aos-once="true" data-aos-delay="500">Skills</span>
                <div className='row'>
                    <div className='col-10 skills_box'>
                        <h2 data-aos="fade-up" data-aos-once="true" data-aos-delay="100">My skills</h2>                
                        <h5 data-aos="fade-up" data-aos-once="true" data-aos-delay="200">Languages</h5>
                        <p data-aos="fade-up" data-aos-once="true" data-aos-delay="200">C, C++, C#, Java, JavaScript, Python, PHP</p>                                    
                        
                        <h5 data-aos="fade-up" data-aos-once="true" data-aos-delay="300">Databases</h5>
                        <p data-aos="fade-up" data-aos-once="true" data-aos-delay="300">MySQL, MongoDB, PostgreSQL</p>                                    
                        
                        <h5 data-aos="fade-up" data-aos-once="true" data-aos-delay="400">Web Technologies</h5>
                        <p data-aos="fade-up" data-aos-once="true" data-aos-delay="400">HTML, CSS/SCSS, JavaScript, React JS/ React-Native, TypeScript, Bootstrap, REST API, jQuery</p>                    
                        
                        <h5 data-aos="fade-up" data-aos-once="true" data-aos-delay="500">Frameworks</h5>
                        <p data-aos="fade-up" data-aos-once="true" data-aos-delay="500">.Net, React, Express, Node, Flask, Django, Laravel </p>
                    
                        <h5 data-aos="fade-up" data-aos-once="true" data-aos-delay="600">Tools & Libraries</h5>
                        <p data-aos="fade-up" data-aos-once="true" data-aos-delay="600">Git, GitHub, Jupyter Notebook, Google Colab, Scikit-Learn, TensorFlow, OpenCV, AWS(Basics), Tableau, Adobe Photoshop, Adobe Illustrator, Adobe XD, Figma</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Skills;