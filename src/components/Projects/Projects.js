import React, { useEffect } from 'react';
import AOS from 'aos';



import './Projects.css';
import projects_data from './Projects.json';
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
                        {projects_data?.map((project, id) => (
                            <ProjectCard
                                key={id}
                                info={project}
                                delay={(id+2)*100}
                                imgClass={`i${id+1}`}
                            />
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Projects;
