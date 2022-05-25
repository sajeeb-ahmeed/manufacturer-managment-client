import React from 'react';
import { BsTwitter, BsInstagram, BsFacebook, BsLinkedin, BsArrowRightShort } from 'react-icons/bs';
import { FcSportsMode } from 'react-icons/fc'
import './Footer.css';

const Footer = () => {

    let year;
    let date = new Date().getFullYear();
    year = date;

    return (
        <div>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer_col_1">

                        <a href=" " className="footer_logo text-heading-18 text-foot"> <FcSportsMode className='icon-foot'></FcSportsMode> Modernia  </a>
                        <p className="text-paragraph-16">Moderno ensures the best user interface as well as user experience so your customers will love you from the first sight.</p>
                        <ul className="footer_icons">
                            <li>  <BsTwitter></BsTwitter> </li>


                            <li>   <BsInstagram></BsInstagram> </li>
                            <li>  <BsFacebook></BsFacebook> </li>
                            <li>  <BsLinkedin></BsLinkedin> </li>
                        </ul>
                    </div>
                    <div className="footer_col_2">
                        <ul className="footer_list">
                            <h6 className="footer_list_main text-heading-16">Solutions</h6>
                            <li> <BsArrowRightShort /> <a href=" " className="footer_list_main_text text-heading-16">Marketing</a></li>
                            <li> <BsArrowRightShort /> <a href=" " className="footer_list_main_text text-heading-16">Analytics</a></li>
                            <li> <BsArrowRightShort /> <a href=" " className="footer_list_main_text text-heading-16">Commerce</a></li>
                            <li> <BsArrowRightShort /> <a href=" " className="footer_list_main_text text-heading-16">Insights</a></li>
                        </ul>
                        <ul className="footer_list">
                            <h6 className="footer_list_main text-heading-16">Support</h6>
                            <li> <BsArrowRightShort /> <a href=" " className="footer_list_main_text text-heading-16">Pricing</a></li>
                            <li> <BsArrowRightShort /> <a href=" " className="footer_list_main_text text-heading-16">Documentation</a></li>
                            <li> <BsArrowRightShort /> <a href=" " className="footer_list_main_text text-heading-16">Guide</a></li>
                            <li> <BsArrowRightShort /> <a href=" " className="footer_list_main_text text-heading-16">Api Status</a></li>
                        </ul>
                        <ul className="footer_list">
                            <h6 className="footer_list_main text-heading-16">Company</h6>
                            <li> <BsArrowRightShort /> <a href=" " className="footer_list_main_text text-heading-16">About</a></li>
                            <li> <BsArrowRightShort /> <a href=" " className="footer_list_main_text text-heading-16">Features</a></li>
                            <li> <BsArrowRightShort /> <a href=" " className="footer_list_main_text text-heading-16">Services</a></li>
                            <li> <BsArrowRightShort /> <a href=" " className="footer_list_main_text text-heading-16">Testimonial</a></li>
                            <li> <BsArrowRightShort /> <a href=" " className="footer_list_main_text text-heading-16">Portfolio</a></li>
                        </ul>
                        <ul className="footer_list">
                            <h6 className="footer_list_main text-heading-16">Legal</h6>
                            <li> <BsArrowRightShort /> <a href=" " className="footer_list_main_text text-heading-16">Claim</a></li>
                            <li> <BsArrowRightShort /> <a href=" " className="footer_list_main_text text-heading-16">Privacy</a></li>
                            <li> <BsArrowRightShort /> <a href=" " className="footer_list_main_text text-heading-16">Terms</a></li>
                        </ul>
                    </div>
                </div>
                {/* <hr className="footer_hr" /> */}
                <p className="text-heading-16 text-center"> &copy; {year} Modernia All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;