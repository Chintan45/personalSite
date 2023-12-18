import React, { useState } from 'react';
import axios from 'axios';

import { API } from '../../config/api';
import './Contact.css';

const Contact = () => {
    const baseUrl = API + '/messages/postMessage';
    const [submitText, setSubmitText] = useState('Submit');
    const [contactForm, setContactForm] = useState({'name':'', 'email':'', 'message':''});
    
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setContactForm({
            ...contactForm,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(baseUrl, contactForm);
            console.log('Response:', res);
            setContactForm({'name':'', 'email':'', 'message':''});
            
            setSubmitText('Message has been sent');
            setTimeout(() => {
                setSubmitText('Send');
            }, 3000);
        } catch(err){
            setSubmitText('Unable to send a message, please try again after sometime!');
            setTimeout(() => {
                setSubmitText('Send');
            }, 3000);
            console.log(err.response.data.message);
        }
    }

    return(
        <div className='contact' id='contact'>
            <div className='container'>
                <h2>Contact Me</h2>
                <form autoComplete="off" className="contact-form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 contact-info">
                            <h4>Get in touch by</h4>
                            <div>
                                <span>Phone:</span>
                                <p className="phone">(312)-934-9534</p>
                            </div>
                            <div>
                                <span>Email:</span>
                                <p className="email">chintandobariya18@gmail.com</p>
                            </div>
                            <div>
                                <span>LinkedIn:</span>
                                <p className="linkedin"><a href='https://www.linkedin.com/in/chintandobariya/'>LinkedIn/Chintandobariya</a></p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-container">
                            <input type="text" id="name" name="name" placeholder="Your Name" value={contactForm.name} onChange={handleFormChange} autoComplete="off" required />
                            <input type="email" id="email" name="email" placeholder="Your Email" value={contactForm.email} onChange={handleFormChange} autoComplete="off" required />
                            <textarea id="message" name="message" placeholder="Your Message" value={contactForm.message} onChange={handleFormChange} autoComplete="off" required></textarea>
                            <button type="submit">{submitText}</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Contact;