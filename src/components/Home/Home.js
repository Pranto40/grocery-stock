import React from 'react';
import banner from '../../images/banner.jpg'
import InventoryItems from '../InventoryItems/InventoryItems';
import './Home.css'
const Home = () => {
    return (
        <div className='container'>
           <div className="row">
               <div className="col-md-6 d-flex align-items-center">
                   <div>
                        <h3>Grocery stock</h3>
                        <h1 className='m-0' style={{color: '#C5E78F'}}>Better Products at the Right Price</h1>
                        <hr />
                        <h2 className='m-0' style={{color: 'rgb(96, 146, 0)'}}>Online Grocery Store & Delivery</h2>
                        <button className='btn mt-5'>Read More</button>
                   </div>
               </div>
               <div className="col-md-6">
                   <img className='img-fluid' src={banner} alt="" />
               </div>
           </div>
           <InventoryItems></InventoryItems>
        </div>
    );
};

export default Home;