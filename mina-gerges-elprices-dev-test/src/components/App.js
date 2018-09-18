import React, { Component } from 'react';
import Header from './Header';
import Products from './product/Products';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'Brantu Shopping List'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div className="mt-5">
                    <Products />
                </div>
            </div>
        );
    }
}