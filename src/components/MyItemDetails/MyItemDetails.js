import React from 'react';

const MyItemDetails = ({item, items ,setItems}) => {
    const {name, img, description, price, quantity, supplierName, _id} = item;
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? This item delete');
        if(proceed) {
          const url = `https://salty-wave-28243.herokuapp.com/item/${id}`;
          fetch(url, {
            method: 'DELETE',
          })
          .then(res => res.json())
          .then(data => {
            const remaining = items.filter(product => product._id !== id);
            setItems(remaining)
          })
        }
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
                    <button onClick={() =>handleDelete (_id)} className="btn">Remove Item</button>
                </div>
            </div>
        </div>
    );
};

export default MyItemDetails;