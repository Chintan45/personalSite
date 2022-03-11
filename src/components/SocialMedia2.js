import React from 'react';
import '../App.css';
const SocialMedia2 = () => {
    return (
        <div className="section">
            <ul>
                <li>
                    <div className="sbg">
                        <a href={"https://in.linkedin.com/in/chintan-dobariya-23413b156"} className="slink">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="sbg">
                        <a href="https://be.net/chintandobariya" className="slink">
                            <i className="fab fa-behance"></i>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="sbg">
                        <a href='https://github.com/ChintanDobariya' className="slink">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </li>
            </ul>
        </div >
    );
}
export default SocialMedia2;
