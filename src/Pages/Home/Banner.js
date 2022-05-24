import React from 'react';
import { Link } from 'react-router-dom';
import plumber from '../../images/plumbing.png'

const Banner = () => {
    return (
        <div className="">
            <div className="cursor">
                <Link to='/pruches'>
                    <img src={plumber} className=" rounded-lg shadow-2xl" alt='' />
                </Link>

            </div>
        </div>
    );
};

export default Banner;