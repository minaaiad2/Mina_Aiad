import React, { Component } from 'react';
import ProductList from './ProductList';
import ProductService from '../../services/ProductService';

export default class Products extends Component {

    constructor() {
        super();

        this.state = {
            products: [],
            allProducts:ProductService.getProducts()
        };
    }

    componentDidMount() {
        this.setState(() => ({ products: ProductService.getProducts() }));
    }

    filterProducts(e)
    {
        console.log('inside filterProducts method');  
        var updatedList = this.state.allProducts;
        updatedList = updatedList.filter((item =>{ return item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;}) );
        this.setState({ products: updatedList,   });
        
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>                 
                <input type="text"  onChange={(e) =>this.filterProducts(e)} className="form-control input-lg" placeholder="Filter here..."  style={{margin: '15px'}}/>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <ProductList products={this.state.products} />
                    </div>
                </div>
            </div>
        );
    }
}