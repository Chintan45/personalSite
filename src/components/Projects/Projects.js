import React, { useEffect } from 'react';
import AOS from 'aos';



import './Projects.css';
import ProjectCard from './ProjectCard';
const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 800 })
    }, [])
    return (
        <div id="projects">
            <div className="bg">
                <div className="container">
                    <div className="row project-row">
                        <p className="project-p" data-aos="fade-up" data-aos-once="true">P R O J E C T S</p>
                        <h3 className="project-h3" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">Things that I have done</h3>
                    </div>
                </div>

                <div className="container con2">
                    <div className="row">
                        <ProjectCard delay={200} imgClass={"i1"} />
                        <ProjectCard delay={300} imgClass={"i2"} />
                        <ProjectCard delay={400} imgClass={"i3"} />
                        <ProjectCard delay={500} imgClass={"i4"} />
                        <ProjectCard delay={600} imgClass={"i5"} />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Projects;
