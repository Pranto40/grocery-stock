import React from 'react';
import banner from '../../images/banner.jpg'
import './Home.css'
const Home = () => {
    return (
        <div className='container'>
           <div className="row">
               <div className="col-md-6 d-flex align-items-center">
                   <div>
                        <h3>Grocery stock</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero sapiente voluptates modi ipsa, vero aperiam officiis inventore quidem enim laudantium nisi aliquid dolorum eveniet neque corporis distinctio ut recusandae.
                        </p>
                        <button className='btn'>Read More</button>
                   </div>
               </div>
               <div className="col-md-6">
                   <img className='img-fluid' src={banner} alt="" />
               </div>
           </div>
        </div>
    );
};

export default Home;