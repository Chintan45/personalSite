import { Link } from "react-scroll";
import SocialMedia from '../SocialMedia';
import SocialMedia2 from '../SocialMedia2';
import './Footer.css';

export const Footer = () => {
    return (
        <div className="footerbg" id="footer">
            <div className="container">
                {/* <div className="row">
                    <h1 className="f-header">Now that you know what I can do for you <br />
                        Let’s discuss your Project.</h1>
                    <button className="f-btn">
                        <a href="mailto:chintandobaria18@gmail.com">Let's Talk</a>
                    </button>
                </div> */}
                <div className="row f-footer">
                    <div className="col-xl-6 col-md-6">
                        <div className="f-menu">
                            <ul>
                                <Link to="about" smooth={true} duration={200} className="li">About</Link>
                                <Link to="service" smooth={true} duration={500} className="li">Service</Link>
                                <Link to="portfolio" smooth={true} duration={700} className="li">Portfolio</Link>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <SocialMedia2 />
                        <SocialMedia />
                    </div>
                </div>
                <div className="row" style={{ textAlign: 'center', fontSize: '12px', marginTop: '20px' }}>
                    <p>Copyright ©2022 All rights reserved | This Website is made with ❤ by Chintan</p>
                </div>
            </div>
        </div>
    )
}
