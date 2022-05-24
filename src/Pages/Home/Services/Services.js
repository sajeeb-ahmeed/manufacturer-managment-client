import React from 'react';

import { useNavigate } from 'react-router-dom';

const Services = ({ service }) => {

    const { _id, name, img, description, price, quantity, minimumOrder } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/update/${_id}`);

    }


    return (
        <div className='service'>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 card-bg2">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body nav-bg items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p> {description?.slice(0, 150) + '...'}</p>
                    <code className='text-blue-500'>Price ${price}</code>

                    <p> Current Stock: {quantity}</p>
                    <code className='font-bold text-red-400'> Minimum Order: {minimumOrder}</code>
                    <div className="card-actions">
                        <button className="cta " onClick={() => navigateToServiceDetail(_id)}>
                            <span>Purchase</span>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;