import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const getProducts = (products) => {
    return (
        <div className="card-deck">
            {
                products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    );
};

const ProductList = (props) => (
    <div>
        {getProducts(props.products)}
    </div>
);

ProductList.defaultProps = {
    products: []
};

ProductList.propTypes = {
    products: PropTypes.array
};

export default ProductList;