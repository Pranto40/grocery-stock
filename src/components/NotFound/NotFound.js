import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                    <img className='img-fluid' src="https://i.ibb.co/TBpt2wW/404-Not-Found.png" alt="" />
                        <div className="mt-5">
                            <h1>404 PAGE NOT FOUND!</h1>
                            <h3>This page isn't available. Sorry about that.</h3>
                            <h4>Try searching for something else.</h4>
                            <Link to='/' className='btn mt-3'>Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;