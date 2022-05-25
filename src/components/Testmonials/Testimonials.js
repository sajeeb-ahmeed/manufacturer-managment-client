import React from 'react';
import './Terstimonials.css'
const Testimonials = () => {
    return (
        <div className='container-fluid mx-auto my-5'>
            <div className="row">
                <section id="WhyAlivio" className="service">
                    <div className="service-container">
                        <div className="service-top">
                            <div className="service-top-heading">
                                <h3 className="text-heading-20 italic">How it works</h3>
                                <h2 className="heading-secondary italic2">Understand & Release the stress in 3 steps</h2>
                            </div>

                        </div>

                        <div className="service-main">
                            <div className="card card-1">
                                <div className="card-heading">
                                    <h3 className="heading-tertiary">Personalize</h3>
                                </div>
                                <div className="card-body">
                                    <p className="text-paragraph-16">Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!
                                    </p>
                                </div>
                            </div>
                            <div className="card card-2">
                                <div className="card-heading">
                                    <h3 className="heading-tertiary">Quality Compliment</h3>
                                </div>
                                <div className="card-body">
                                    <p className="text-paragraph-16">Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!</p>
                                </div>
                            </div>
                            <div className="card card-3">
                                <div className="card-heading">
                                    <h3 className="heading-tertiary">Dependeble!</h3>
                                </div>
                                <div className="card-body">
                                    <p className="text-paragraph-16">Now you are aware, and have a way to manage and overcome your own stress. What are you waiting for? Morderno today!</p>
                                </div>
                            </div>
                            <div className="card card-img-1">
                                <img src={`https://hatil.com/sites/default/files/Open-Shelves.jpg`} alt="" />
                            </div>
                            <div className="card card-img-2">
                                <img src={`https://hatil.com/sites/default/files/Sofa_0.jpg`} alt="" />

                            </div>
                            <div className="card card-img-3">
                                <img src={`https://hatil.com/sites/default/files/File-Rack.jpg`} alt="" />
                            </div>
                        </div>
                        {/* <!-- .service-main End --> */}
                    </div>
                    {/* <!-- .service-container End --> */}
                </section>
            </div>
        </div>
    );
};

export default Testimonials;