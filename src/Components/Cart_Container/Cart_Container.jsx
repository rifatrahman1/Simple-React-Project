import PropTypes from 'prop-types';
import './Cart_Container.css'
import Cart from '../Cart/Cart';
import About from '../About/About';
const Cart_Container = ({ handle_is_active, is_active, select_product, handle_deleted }) => {
    return (
        <div>
            <h1 className="text-4xl">Cart Container</h1>
            <div className="flex gap-14 mt-12">
                <button onClick={() => handle_is_active('cart')} className={`${is_active.cart ? 'text-2xl active' : 'text-2xl'}`}>Cart</button>
                <button onClick={() => handle_is_active('about')} className={`${is_active.cart ? 'text-2xl' : 'text-2xl active'}`}>About</button>
            </div>
            <div className='mt-10'>
                {
                    is_active.cart ? <Cart handle_deleted={handle_deleted} select_product={select_product}></Cart> : <About></About>
                }
            </div>
        </div>

    );
};

Cart_Container.propTypes = {
    handle_is_active: PropTypes.func.isRequired,
    is_active: PropTypes.object.isRequired,
    select_product: PropTypes.array.isRequired,
    handle_deleted: PropTypes.func.isRequired
}

export default Cart_Container;