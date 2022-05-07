import React from 'react';
import Contact from '../../images/contactUs.jpg';

const ContactUs = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-7">
                    <img className='img-fluid' src={Contact} alt="" />
                </div>
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                    <div className='w-100 text-center'>
                    <h1 className=' m-3 text-primary'>Contact Us</h1>
                    <form>
                        <input className='w-75' type="text" placeholder='Name' />
                        <br />
                        <input className='my-3 w-75' type="text" placeholder='Email' />
                        <br />
                        <textarea className='w-75' type="text" name="" id="" cols="20" rows="5" placeholder='Message'></textarea>
                        <br />
                        <input className='btn mt-3' type="button" value="Submit" />
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;