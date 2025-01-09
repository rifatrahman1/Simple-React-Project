import PropTypes from 'prop-types';

function Cart({ select_product, handle_deleted }) {
    return (
        <div>
            <h1 className="text-3xl">Cart Details Container</h1>
           <div className='mt-9 grid grid-cols-2'>
           {
                select_product.map((product, idx) => (<div key={idx}>
                    <img className='w-[250px] h-[250px]' src={product.image} alt="" />
                    <h1 className='text-2xl font-bold'>name: {product.name}</h1>
                    <p className='font-bold'>{product.price}</p>
                    <button onClick={() => handle_deleted (product.id)} className='p-4 text-[18px] bg-orange-400 text-white rounded-xl my-5'>Deleted</button>
                </div>))
            }
           </div>
        </div>
    );
}

Cart.propTypes = {
    select_product: PropTypes.array.isRequired,
    handle_deleted: PropTypes.func.isRequired
}
export default Cart;