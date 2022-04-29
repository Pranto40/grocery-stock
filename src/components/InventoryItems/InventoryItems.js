import React, { useEffect, useState } from 'react';
import InventoryItemsDetails from '../InventoryItemsDetails/InventoryItemsDetails';



const InventoryItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className='text-center my-5'>Inventory Items</h1>
            <div className='row'>
                {
                    products.map(product => <InventoryItemsDetails
                        key={product.id}
                        product = {product}
                    ></InventoryItemsDetails>)
                }
            </div>
        </div>
    );
};

export default InventoryItems;