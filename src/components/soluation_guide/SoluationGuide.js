import React from 'react';
import { useNavigate } from 'react-router-dom';

const SoluationGuide = () => {
    const navigate = useNavigate();
    const navigatTo = () => {
        navigate('/blogs')
    }
    return (
        <div className='container-fluid my-5 card-bg2 text-center '>
            <div className='container flex-co py-3 '>
                <div>
                    <h5 className='text-dark'>NEWSLETTER</h5>
                    <p className='guide  text-light'>Not sure which solution fits you business needs?

                    </p>
                </div>
                <div>
                    <input className='cards4 px-5 me-lg-3' placeholder='Your Email Address' type="text" />
                    <button onClick={() => navigatTo()} className="cta2 ">
                        <span>Submit</span>

                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SoluationGuide;