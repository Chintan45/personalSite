import React from 'react'

const ProjectCard = ({ delay, imgClass="", info }) => {

    const openNewTab = (url) => {
        window.open(url, '_blank');
    };

    return(
        <div className="col-xl-4 col-md-6 flip-box">
            <div data-aos="zoom-in-up" data-aos-delay={delay} data-aos-once="true" className="project-thumb ">
                <div className={"p-img flip-box-front " + imgClass} >
                    <div className='inner'>
                        <h3 className='flip-box-header'>{info.name}</h3>
                        <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="forward arrow" className="flip-box-img"></img>
                    </div>
                </div>
                <div className={"p-img flip-box-back " + imgClass} >
                    <div className='inner'>
                        <h3 className='flip-box-header'>About</h3>
                        <p>{info.description}</p>
                        <button className='flip-box-button'onClick={() => openNewTab(info.url)}> 
                            Leran More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;