import { ShoppingCart } from "./shoppingCart.js";
import { Shop } from "./shop.js";
import { ProductList } from "./productList.js";

export class App {
    static init() {
        const productList = new ProductList();
        const shoppingCart = new ShoppingCart();
        const shop = new Shop(productList, shoppingCart);
        productList.fetchProducts();
        shop.render();
    }
    
    static addProductToCart(product) {
        const shoppingCart = ShoppingCart.getInstance();
        if (!shoppingCart.items) {
            shoppingCart.items = [];
        }
        shoppingCart.items.push({ product });
        shoppingCart.setTotal();
        shoppingCart.render();
    }
}

App.init();