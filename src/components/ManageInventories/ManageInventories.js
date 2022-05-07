import React from 'react'
import useProducts from '../../Hook/useProducts';
import ManageInventoriesDetails from '../ManageInventoriesDetails/ManageInventoriesDetails';

const ManageInventories = () => {
    const [allProducts, setAllProducts] = useProducts([]);
  return (
    <div className='container'>
            <h1 className='text-center my-5'>Manage Inventories Items</h1>
            <div className='row'>
                    {
                    allProducts.map(product => <ManageInventoriesDetails
                        key={product._id}
                        product = {product}
                        allProducts = {allProducts}
                        setAllProducts = {setAllProducts}
                    ></ManageInventoriesDetails>)
                     }
            </div>
        </div>
  )
}

export default ManageInventories
