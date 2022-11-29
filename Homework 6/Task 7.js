class Product {
    constructor (name, type, price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

const bread = new Product('bread', 'food', 1);
const juice = new Product('juice', 'drink', 1.5);
const shirt = new Product('shirt', 'clothes', 4);
const tv = new Product('tv', 'electronics', 25);
const water = new Product('water', 'drink', 1);


class ShoppingCart {
    constructor() {
        this.products = [];
        this.price = 0;
    }
    addProduct (product) {
        if (product.constructor === Product) {
            shoppingCart.products.push(product);
        } 
    }
    removeProduct (product) {
        shoppingCart.products = shoppingCart.products.filter((item, index) => shoppingCart.products.indexOf(product) !== index);
    }
    totalPrice () {
        const prices = shoppingCart.products.map(item => item.price);
        const sameProducts = shoppingCart.products.filter((item, index) => shoppingCart.products.indexOf(item) !== index);
        const sum = prices.reduce((calc, cur) => calc + cur);
        shoppingCart.price += sum;
        if (shoppingCart.products.length >= 5) {
            shoppingCart.price -= shoppingCart.price / 10;       
        }
        if ((sameProducts.length + 1) > 3 && (sameProducts.length + 1) % 4 === 0) {
            shoppingCart.price -= sameProducts[0].price * ((sameProducts.length + 1) / 4);
        }
        return shoppingCart.price;
    }
    replace (productName, replacementProduct) {
        shoppingCart.products = shoppingCart.products.filter(item => item.name !== productName);
        shoppingCart.products.push(replacementProduct);
    }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addProduct(tv);
shoppingCart.addProduct(bread);
shoppingCart.addProduct(tv);
shoppingCart.addProduct(bread);
shoppingCart.addProduct(bread);
shoppingCart.addProduct(bread);

shoppingCart.removeProduct(tv);

console.log(shoppingCart.totalPrice());

shoppingCart.replace('tv', juice);

console.log(shoppingCart.products);