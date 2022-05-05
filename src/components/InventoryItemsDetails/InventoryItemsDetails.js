import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryItemsDetails = ({product}) => {
    const {name, img, description, price, quantity, supplierName, _id} = product;

    const navigate = useNavigate();
    const showDetails = () => {
        const path = `/inventoryItems/${_id}`;
        navigate(path)
    }
    return (
        <div className='col-md-6 col-lg-4 card-group'>
            <div className="card mb-4">
                <img className="card-img-top" src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h3>Price: {price}</h3>
                    <h4>Quantity: {quantity}</h4>
                    <h5>Supplier name: {supplierName}</h5>
                    <p className="card-text">Description: {description}</p>
                    <button onClick={showDetails} className="btn">Stock Update</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItemsDetails;