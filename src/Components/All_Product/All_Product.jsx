
import { useEffect, useState } from "react";
import Product from "../Product/Product";
import PropTypes from 'prop-types';

const All_Product = ({ handle_select_product }) => {
    const [products, set_products] = useState([]);

    useEffect(() => {
        fetch('../../../public/cart.json')
            .then(res => res.json())
            .then(data => {
                set_products(data);
            })
    }, [])

    return (
        <div>
            <h1 className="text-4xl">All Product Container</h1>
            <div className="">
                {
                    products.map(product => <Product handle_select_product={handle_select_product} key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

All_Product.propTypes = {
    handle_select_product: PropTypes.func.isRequired
}
export default All_Product;