
import useProducts from '../Hook/useProducts';
import InventoryItemsDetails from '../InventoryItemsDetails/InventoryItemsDetails';

const InventoryItems = () => {
    const [products] = useProducts([]);
    return (
        <div className='container'>
            <h1 className='text-center my-5'>Inventory Items</h1>
            <div className='row'>
                    {
                    products.map(product => <InventoryItemsDetails
                        key={product._id}
                        product = {product}
                    ></InventoryItemsDetails>)
                     }
            </div>
        </div>
    );
};

export default InventoryItems;