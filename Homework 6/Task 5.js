class City {
    constructor() {
        this.name = 'Yerevan';
        this.buildings = [];
    }
}

class Building {
     constructor(address, staff) {
        this.address = address;
        this.staff = staff;
        this.cars = [];
    }
}

class Hospital extends Building {}

class PoliceDepartment extends Building {}

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

class PoliceCar extends Car {}

class AmbulanceCar extends Car {}

const myCity = new City();
const hosp1 = new Hospital('Abovyan', 50);
const hosp2 = new Hospital('Mashtoc', 60);
const hosp3 = new Hospital('Erebuni', 70);
const pol1 = new PoliceDepartment('Nalbandyan', 40);
const pol2 = new PoliceDepartment('Komitas', 45);
const car1 = new PoliceCar('Renault', 2015)
const car2 = new PoliceCar('Toyota', 2020)
const car3 = new AmbulanceCar('Nissan', 2021)
const car4 = new AmbulanceCar('Ford', 2022)

myCity.buildings.push(hosp1, hosp2, hosp3, pol1, pol2)
pol2.cars.push(car1, car2)


console.log(pol2);