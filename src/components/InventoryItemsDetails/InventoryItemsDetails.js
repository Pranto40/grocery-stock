import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.jpg'

const InventoryItemsDetails = ({product}) => {
    const {name, img, description, price, quantity, supplierName} = product;
    return (
        <div className='col-md-4'>
            <div className="card mb-4">
                <img className="card-img-top" src={banner} alt="" />
                <div className="card-body">
                    <h5 className="card-title">name: {name}</h5>
                    <h3>price: {price}</h3>
                    <h4>quantity: {quantity}</h4>
                    <h5>supplierName: {supplierName}</h5>
                    <p className="card-text">{description}</p>
                    <Link to="#" className="btn btn-primary">Stock Update</Link>
                </div>
            </div>
        </div>
    );
};

export default InventoryItemsDetails;