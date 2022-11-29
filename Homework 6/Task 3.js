class Abstract {
    constructor() {
       this.name = 'John';
       this.surname = 'Dorian';
       this.age = 30;
       if (this.constructor === Abstract) {
        throw new Error("Can't create an instance");
       }
    }
}

// const a = new Abstract()

class Test extends Abstract {

}

const b = new Test()

console.log(b);
