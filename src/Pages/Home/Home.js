import React from 'react';
import Banner from './Banner';
import Service from './Service/Service';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto px-12'>
                <Service></Service>
            </div>
        </div>


    );
};

export default Home;