import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleDetailsitems = () => {
    const {id} = useParams();

    const [singleDetail, setSingleDetail] = useState({});
    const {name, img, description, price, quantity, supplierName, _id} = singleDetail;

    useEffect( () => {
        const url = `https://salty-wave-28243.herokuapp.com/product/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleDetail(data));
    },[]);

    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count - 1)
    }
    const inputQuantity = (e) => {
        const value = e.target.value;
        console.log(value);
    }

    return (
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
            <div>
                {/* <input type="text" name='name' onChange={e.target.value} /> <br /> */}
                <button onClick={inputQuantity} className='btn'>Restock</button>
            </div>
            </div>
        </div>
    );
};

export default SingleDetailsitems;