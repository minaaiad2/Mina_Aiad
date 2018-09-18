import React from 'react';
import PropTypes from 'prop-types';


const ProductCard = (props) => (
    <div className="product-card">
        <div className="product-card card">
            <img className="card-img-top" src={props.product.image} alt="" />
            <div className="card-body">
                <h4 className="card-title">{props.product.brand}</h4>
                <p className="text-justify" style={{fontSize: '14px'}}>{props.product.name}</p>
            </div>
            <div className="card-footer">
                <div className="clearfix">
                    <div className="card-footer-badge float-left badge badge-primary badge-pill">{props.product.category.name}</div>
                    <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.product.price}</div>
                </div>
            </div>
        </div>
    </div>
);

ProductCard.defaultProps = {
    product: {}
};

ProductCard.propTypes = {
    product: PropTypes.object
};

export default ProductCard;