import React from 'react';
import airhub from '../../../images/brands/Airbnb_Logo.png';
import fedex from '../../../images/brands/FedEx_logo.png';
import Google_Logo from '../../../images/brands/Google_Logo.png';
import hubspot from '../../../images/brands/Hubspot_Logo.png';
import microsoft from '../../../images/brands/Microsoft_Logo.png';
import walmart from '../../../images/brands/Walmart_Logo.png';
import './partner.css'
const Partners = () => {
    return (
        <div className="brands my-5">
            <h4 className="text-heading-18 brands-heading text-center">Used by 1000+ organizations across the world</h4>
            <div className="brand">
                <img src={airhub} alt="" className="brand_img" />
                <img src={fedex} alt="" className="brand_img" />
                <img src={Google_Logo} alt="" className="brand_img" />
                <img src={hubspot} alt="" className="brand_img" />
                <img src={microsoft} alt="" className="brand_img" />
                <img src={walmart} alt="" className="brand_img" />
            </div>
        </div>
    );
};

export default Partners;