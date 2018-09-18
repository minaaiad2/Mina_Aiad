import products from './products.json';

export default class ProductService {
    static getProducts() {
        return products ? products : [];
    }
}