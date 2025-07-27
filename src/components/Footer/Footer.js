import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <img
                    src="https://lf16-recruit-overseas-cdn-sg-sign.larksuite.com/obj/recruit-overseas-flie-sg/32961959/495010931/1519231217/7e84759d5008072e31da9a2402accc9122587086-7621x2341.png?x-expires=1755046808&x-signature=bTEppoDalw6swFAls2%2FvUhkVNNE%3D"
                    alt="logo"
                    style={{ width: "200px", height: "auto" }}
                />

                {/* Right side: Contact Info */}
                <div className="footer-contact">
                    <h4>Contact Me</h4>
                    <p>Email: yao.ngsde@gmail.com</p>
                    <p>Phone: +1 (551) 331-5704</p>
                    <p>LinkedIn: https://www.linkedin.com/in/yaoma1111/</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
