import React from 'react';

import { useNavigate } from 'react-router-dom';

const HProducts = ({ service }) => {

    const { _id, toolName,
        toolImage,
        toolPrice,
        minOrder,
        availableQuantity,
        toolDescription, } = service;
    const navigate = useNavigate();

    const handleConfirmPurchase = (_id) => {
        navigate(`/confirm-purchase/${_id}`);
        window.scrollTo(0, 0);
    }



    return (
        <div className='service'>
            <div className="card  ">
                <figure className="px-10 pt-10 card-bg2">
                    <img src={toolImage} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body nav-bg items-center text-center">
                    <h2 className="card-title">{toolName}</h2>
                    <p> {toolDescription?.slice(0, 150) + '...'}</p>
                    <code className='text-blue-500'>Price ${toolPrice}</code>

                    <p> Current Stock: {availableQuantity}</p>
                    <code className='font-bold text-red-400'> Minimum Order: {minOrder}</code>
                    <div className="card-actions">

                        <button
                            onClick={() => handleConfirmPurchase(_id)}
                            className="cta"

                        >
                            Confirm Order
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HProducts;