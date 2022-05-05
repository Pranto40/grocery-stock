import React from 'react'
import useProducts from '../../Hook/useProducts';
import ManageInventoriesDetails from '../ManageInventoriesDetails/ManageInventoriesDetails';

const ManageInventories = () => {
    const [allProducts] = useProducts([]);
  return (
    <div className='container'>
            <h1 className='text-center my-5'>Inventory Items</h1>
            <div className='row'>
                    {
                    allProducts.map(product => <ManageInventoriesDetails
                        key={product._id}
                        product = {product}
                    ></ManageInventoriesDetails>)
                     }
            </div>
        </div>
  )
}

export default ManageInventories
