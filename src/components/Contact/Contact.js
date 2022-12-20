import React from 'react';


import './Contact.css';

const Contact = () => {
    return(
        <div className='contact' id='contact'>
            <div className='container'>
                <h2>Contact Me</h2>
                <p>Get in touch</p>
                <div className='contact-box-container'>
                    <div className='colum1 col-xl-4 col-md-6'>
                        <div className='c-row'>
                            <div>
                                <i className="far fa-envelope" ></i>
                            </div>
                            <div className=''>
                                <h4 className='c-title'>Email ID:</h4>
                                <p className='c-subtitle'>cdobar2@uic.edu</p>
                            </div>
                        </div>
                    </div>
                    <div className='colum2'>
                        <div>
                            <input type={'text'} />
                            <input type={'text'} />
                        </div>
                        <div>
                            <textarea />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;