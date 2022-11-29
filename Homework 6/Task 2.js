class CoffeeShop {
    constructor() {
        this.name = 'StarBucks';
        this.menu = [];
        this.orders = [];
    }
    addOrder (order) {
        if (this.menu.includes(order)) {
            starBucks.orders.push(order.name);
            console.log('Order added');
        } else {
            console.log('This item is currently unavailable!');
        }
    }
    
    fulfillOrder () {
        if (starBucks.orders.length > 0) {
            let yourOrder = starBucks.orders[0];
            starBucks.orders.shift();
            console.log(`The ${yourOrder} is ready!`);        
        } else {
            console.log(`All orders have been fulfilled!`);
        }
    }
    
    listOrders () {
        console.log(starBucks.orders);        
    }
    
    dueAmount () {
        let count = 0;
        for (let i = 0; i < starBucks.orders.length; i++) {
            let tempArray = starBucks.menu.filter(item => item.name === starBucks.orders[i]);
            let amount = tempArray.map(item => item.price);
            count += Number(amount.join('').replace('$', ''));
        }
        console.log(count);
    }
    
    cheapestItem () {
        let tempArray = starBucks.menu.map(item => Number(item.price.replace('$', '')));
        let smallestAmount = tempArray.sort((a, b) => a - b)[0] + ' $';
        let cheapest = starBucks.menu.find(item => item.price === smallestAmount);
        console.log(cheapest.name);
    }
    
    drinksOnly () {
        let tempArray = starBucks.menu.filter(item => item.type === 'drink');
        let drinksOnly = tempArray.map(item => item.name);
        console.log(drinksOnly);
    }
    
    foodOnly () {
        let tempArray = starBucks.menu.filter(item => item.type === 'food');
        let foodOnly = tempArray.map(item => item.name);
        console.log(foodOnly);
    }
}

const starBucks = new CoffeeShop();

class MenuPositions {
    constructor(name, type, price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

const hotDog = new MenuPositions('Hot Dog', 'food', '2.5 $');
const late = new MenuPositions('Late', 'drink', '1.5 $');
const fries = new MenuPositions('Fries', 'food', '1.5 $');
const fanta = new MenuPositions('Fanta', 'drink', '1 $');

starBucks.menu.push(hotDog, late, fries, fanta);
