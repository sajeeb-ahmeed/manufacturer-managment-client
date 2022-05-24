import React, { useEffect, useState } from 'react';

import './Service.css'

import Services from '../Services/Services';


const Service = () => {

    const [services, setServices] = useState([]);
    const newServices = services.slice(0, 6)
    // console.log(services);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className='container my-5'>

            <div className="row">
                <h2 className='inventory1 text-3xl font-bold lg:my-20 my-9 '>FEATURED PRODUCTS</h2>
                <div className="inventory-container">
                    {
                        newServices.map(service => <Services key={service._id}
                            service={service}>

                        </Services>


                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;