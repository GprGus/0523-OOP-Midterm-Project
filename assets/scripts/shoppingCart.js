import { Product } from "./product.js";

export class ShoppingCart {
    constructor() {
    this.items = [];
    this.total = 0;
    }

    static getInstance() {
        if (!ShoppingCart.instance) {
            ShoppingCart.instance = new ShoppingCart();
        }
        return ShoppingCart.instance;
    }

    setTotal() {
    this.total = this.items.reduce((total, item) => total + item.product.price, 0);
    }

    render() {
        const cartElement = document.getElementById('cart')
        cartElement.innerHTML = `
            <ul class="cartItemsList">
                ${this.items.map((item) => `<li>${item.product.title}: $${item.product.price}</li>`).join('')}
            </ul>
            <div class="order">
                <p>Total: $${this.total.toFixed(2)}</p>
                <button id='order'>Order</button>
            </div>
        `;
    }
}