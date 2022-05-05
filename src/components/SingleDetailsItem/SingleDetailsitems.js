import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleDetailsitems = () => {
    const {id} = useParams();
    const [singleDetail, setSingleDetail] = useState({});
    const {name, img, description, price, quantity, supplierName, _id} = singleDetail;

    useEffect( () => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleDetail(data));
    },[]);

    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count - 1)
    }
    const handleQuantity = (e) => {
        e.preventDefault();
        const value = e.target.name.value;
        setCount(parseInt(count) + parseInt(value))
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
                    <h4>Quantity: {parseInt(quantity) + parseInt(count)}</h4>
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
            <button className='btn text-center'>Manage Inventories</button>
            </div>
        </div>
        </>
    );
};

export default SingleDetailsitems;