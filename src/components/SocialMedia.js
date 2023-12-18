import React from 'react';

import '../App.css';

const SocialMedia = () => {

    return (
        <div className="section">
            <ul>
                <li>
                    <div className="sbg">
                        <a href={"https://www.facebook.com/chintan.dobariya.009"} className="slink">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="sbg">
                        <a href='https://www.linkedin.com/in/chintandobariya/' className="slink">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="sbg">
                        <a href="https://twitter.com/ChintanDobariy1" className="slink">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </li>
                {/* <li>
                    <div className="sbg">
                        <a href='https://www.instagram.com/chintan_dobariya_9/' className="slink">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </li> */}
            </ul>
        </div >
    );
}
export default SocialMedia;
