class Jungle {
    constructor () {
        this.animals = [];
        this.food = [];
    }
    soundOff(){
        this.animals.forEach(element => {
            element.sound();
        });
    }
    eatOff(){
        this.animals.forEach(element => {
            element.eat(this.food[Math.floor(Math.random() * (this.food.length))]);
        });
    }
    sleepOff(){
        this.animals.forEach(element => {
            element.sleep();
        });
    }
}

class Animal {
    constructor (species) {
        this.species = species;
        this.energy = 10;
    }

    sound(){
        this.energy -= 3;
    }

    eat(foodType){
        if (amazon.food.includes(foodType)) {
            this.energy += 5;
        }
    }

    sleep(){
        this.energy += 10;
    }
}


class Food {
    constructor (food) {
        this.type = food;
    }
}


class Tiger extends Animal {
    sleep(){
        this.energy += 5;
    }
    eat(foodType){
        if (foodType === grain) {
           console.log(`Can't eat that`);
        } else {
            this.energy += 5;
        }
    }
}



class Monkey extends Animal{
   eat(){
        this.energy += 2;
    }
   sound(){
        this.energy -= 4;
    }
   play(){
        this.energy -= 8;
        if (this.energy >= 8) {
            console.log(`Oooo Oooo`);
        } else {
            console.log(`I'm too tired to play`);
        }
    }
}


class Snake extends Animal{}

class Fish extends Food {}

class Grain extends Food {}

class Meat extends Food {}


const amazon = new Jungle();
const tiger = new Tiger('tiger');
const monkey = new Monkey('monkey');
const snake = new Snake('snake');
const fish = new Fish('fish');
const grain = new Grain('grain');
const meat = new Meat('meat');

amazon.animals.push(tiger, monkey, snake);
amazon.food.push(fish, grain, meat);

amazon.eatOff()

console.log(amazon.animals);
