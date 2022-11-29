class Character {
    constructor(name, type){
        if (name.length > 1 && name.length < 11) {
            this.name = name;
        } else {
            throw new Error ("Name should be min - 2, max - 10 characters long")
        }
        if (type === 'Bowman' || 'Swordsman' || 'Magician' || 'Deamon' || 'Undead' || 'Zombie') {
            this.type = type;
        } else {
            throw new Error ("There isn't such type of character")
        }
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defense = 0;
    }
    levelUp(){
    }
}

class Bowman extends Character {
    constructor () {
        super();
        this.attack = 25;
        this.defense = 25;
    }
}

class Swordsman extends Character {
    constructor () {
        super();
        this.attack = 40;
        this.defense = 10;
    }
}

class Magician extends Character {
    constructor () {
        super(name, type);
        this.attack = 10;
        this.defense = 40;
    }
}

class Deamon extends Character {
    constructor (name, type) {
        super(name, type);
        this.attack = 10;
        this.defense = 40;
    }
}

class Undead extends Character {
    constructor (name, type) {
        super(name, type);
        this.attack = 25;
        this.defense = 25;
    }
}

class Zombie extends Character {
    constructor (name, type) {
        super(name, type);
        this.attack = 40;
        this.defense = 10;
    }
}


const myCharacter = new Zombie("Alex", 'Zombie');

console.log(myCharacter);
