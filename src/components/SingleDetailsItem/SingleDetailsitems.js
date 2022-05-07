import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useProductsDetails from '../../Hook/useProductsDetails';

const SingleDetailsitems = () => {
    const {id} = useParams();
    
    const [singleDetail] = useProductsDetails(id);

    const {name, img, description, price, quantity, supplierName, _id} = singleDetail;

    const [count, setCount] = useState(0);
    console.log(count);
    const handleIncrement = () => {
            setCount(count - 1);
    }
    const handleQuantity = (e) => {
        e.preventDefault();
        const value = e.target.name.value;
        setCount(parseInt(count) + parseInt(value));
        }

    return (
        <>
        <div className='container d-flex justify-content-center'>
            <div className='col-md-6 my-5'>
            <div className="card mb-4">
                <img className="card-img-top" src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h3>Price: {price}</h3>
                    <h4>Quantity: {parseInt(quantity) + parseInt(count) }</h4>
                    <h5>Supplier name: {supplierName}</h5>
                    <p className="card-text">Description: {description}</p>
                    <button onClick={handleIncrement} className="btn">Delivered</button>
                </div>
            </div>
            </div>
            <div className='m-5'>
            <Form onSubmit={handleQuantity}>
                <input type="number" name='name' required /> <br />
                <button className='btn my-3'>Restock</button>
            </Form>
            <Link to='/manageInventories' className='btn text-center'>Manage Inventories</Link>
            </div>
        </div>
        </>
    );
};

export default SingleDetailsitems;