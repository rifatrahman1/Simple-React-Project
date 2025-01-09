import PropTypes from 'prop-types';

const Header = ({ select_product }) => {
    return (
        <div className="bg-teal-400 text-white py-8">
            <div className="w-8/12 mx-auto flex items-center justify-between">
                <div className="text-3xl">Logo</div>
                <div className="flex items-center text-xl gap-6">
                    <p>Home</p>
                    <p>Product</p>
                    <p>Cart: {select_product.length}</p>
                    <p>$ 500</p>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    select_product: PropTypes.array.isRequired
}
export default Header;