import useProducts from '../../Hook/useProducts';
import InventoryItemsDetails from '../InventoryItemsDetails/InventoryItemsDetails';

const InventoryItems = () => {
    const [products] = useProducts([]);
    const onlySixPorduct = products.slice(0, 6);
    return (
        <div className='container'>
            <h1 className='text-center my-5'>Inventory Items</h1>
            <div className='row'>
                    {
                    onlySixPorduct.map(product => <InventoryItemsDetails
                        key={product._id}
                        product = {product}
                    ></InventoryItemsDetails>)
                     }
            </div>
        </div>
    );
};

export default InventoryItems;