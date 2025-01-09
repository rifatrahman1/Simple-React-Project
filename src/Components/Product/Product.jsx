import PropTypes from 'prop-types';

const Product = ({ product, handle_select_product }) => {
    const { name, image, description, isFreature, price, category} = product;

    return (
        <div className='w-[600px] h-[450px]'>
            <img className='mt-28' src={image} alt={`image is active`} />
            <h3 className='text-2xl'>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <p>{isFreature}</p>
            <p>{category}</p>
            <button onClick={() => handle_select_product (product)} className='px-4 py-5 bg-slate-400 text-2xl text-white rounded-xl'>Add To Cart</button>
        </div>
    );
};


Product.propTypes = {
    product: PropTypes.object.isRequired,
    handle_select_product: PropTypes.func.isRequired
}
export default Product;