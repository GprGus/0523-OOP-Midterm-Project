import { App } from "./app.js";
export class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        App.addProductToCart(this.product);
    }

    render() {
        const productElement = document.createElement('li');
        productElement.classList.add('product-item')
        productElement.innerHTML = `
            <div class="product-item__content">
                <img src="${this.product.image}" alt="${this.product.title}">
                <h2>${this.product.title}</h2>
                <p>${this.product.description}</p>
                <p>Price: $${this.product.price}</p>
                <button id="addToCart" class='addToCart'>Add to Cart</button>
            </div>
        `;

        const addToCartButton = productElement.querySelector('.addToCart');
        addToCartButton.addEventListener('click', () => this.addToCart());

        return productElement;
    }
}
