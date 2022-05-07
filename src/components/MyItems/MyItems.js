import React, { useEffect, useState } from 'react';
import MyItemDetails from '../MyItemDetails/MyItemDetails';

const MyItems = () => {
    const [items, setItems] = useState([]);

    useEffect( () => {
        const url = 'https://salty-wave-28243.herokuapp.com/item';
        fetch(url)
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5 text-primary'>My Item</h1>
            <div className="row">
            {
                items.map(item => <MyItemDetails
                key={item._id}
                item = {item}
                items = {items}
                setItems = {setItems}
                ></MyItemDetails>)
            }
            </div>
        </div>
    );
};

export default MyItems;