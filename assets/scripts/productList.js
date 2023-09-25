import { Product } from "./product.js";
import { ProductItem } from "./productItem.js";

export class ProductList {
    constructor() {
        this.products = [];
    }
    
    async fetchProducts() {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            this.products = data;
          this.render(); // Move the rendering here
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }
    
    render() {
        const productListElement = document.querySelector('.product-list'); // Target the .product-list element
        if (!productListElement) {
            console.error('.product-list element not found in the DOM');
          return; // Exit if the element is not found
        }
    
        productListElement.innerHTML = '';
    
        this.products.forEach((productData) => {
            const product = new Product(
                productData.id,
                productData.title,
                productData.price,
                productData.description,
                productData.image
            );
            const productItem = new ProductItem(product);
            productListElement.appendChild(productItem.render());
        });
    }    
}