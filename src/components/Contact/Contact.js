import React from 'react';

import './Contact.css';

const Contact = () => {
    return(
        <div className='contact' id='contact'>
            <div className='container'>
                <h2>Contact Me</h2>
                <form className="contact-form">
                    <div className="col-md-4 col-lg-3 contact-info">
                        <h4>Get in touch by</h4>
                        <div>
                            <span>Email:</span>
                            <p className="email">chintandobariya18@gmail.com</p>
                        </div>
                        <div>
                            <span>LinkedIn:</span>
                            <p className="linkedin"><a href='https://www.linkedin.com/in/chintandobariya/'>LinkedIn/Chintandobariya</a></p>
                        </div>
                    </div>
                    <div className="col-md-7 form-container">
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Contact;