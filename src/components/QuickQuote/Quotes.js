import React from 'react';
import { toast } from 'react-toastify';

const Quotes = () => {
    const done = (event) => {
        event.preventDefault();
        event.target.reset()
        toast.success(' SuccesFully Send');
    }
    return (
        <div className='container my-5 py-5'>
            <div className="row">
                <div className="col-md-6 col-12">
                    <img src={`https://transpress.zooka.io/wp-content/uploads/2016/09/home2-quote-bg.jpg`} className="img-fluid object-fit" alt="" />

                </div>
                <div className="col-md-6 col-12">
                    <h3>REQUEST A QUICK QUOTE</h3>
                    <p>We love to listen and we are eagerly waiting to talk to you regarding your project. Get in touch with us if you have any queries and we will get back to you as soon as possible.</p>
                    <form onSubmit={(e) => done(e)} className="formm">
                        <div className="row ">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <p><span className=" your-name"><input type="text" size="40" className="form-control" aria-required="true" placeholder="Your Name" /></span> </p>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <p><span className=" your-subject"><input type="text" name="your-subject" size="40" className="form-control" aria-required="true" aria-invalid="false" placeholder="Subjects" /></span></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <p><span className=" your-email"><input required type="email" size="40" className=" form-control" aria-required="true" aria-invalid="false" placeholder="Your Email" /></span> </p>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <p><span className=" transport"><input type="text" size="40" className="form-control" aria-required="true" aria-invalid="false" placeholder="Transport" /></span></p>
                            </div>
                        </div>
                        <p><span className=" your-message"><textarea cols="100" rows="6" className=" form-control" aria-invalid="false" placeholder="Your Message"></textarea></span></p>
                        <p className='pb-2'><input type="submit" value="Send Mail" className="  btn pull-right" /></p>
                    </form>
                </div>
            </div>





        </div>

    );
};

export default Quotes;