import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css'
import img from '../../images/sad-emojis.png';

const NotFound = () => {
    return (
        <div className='notFound'>
            <div>
                <img src={img} alt="" />
            <h1>404 PAGE NOT FOUND!</h1>
            <h3>This page isn't available. Sorry about that.</h3>
            <h3>Try searching for something else.</h3>
            <Link to='/' className='btn btn-main'>Go Back</Link>
            </div>
        </div>
    );
};

export default NotFound;