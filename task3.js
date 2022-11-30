  // 3)
  
  // CarConstructor creates cars but what if someone decides to call it without new keyword,
  // write a logic inside the CarConstructor function so it checks if the CarConstructor is called without
  // new keyword it logs "please call me with new keyword" if not it creates a car
  
  function CarConstructor(model, year) {
    this.mode = model;
    this.year = year;
    if (this.constructor === CarConstructor) {
      return this;
    } else {
      console.log("please call me with new keyword");
    }
  }

    
 CarConstructor('AAA', 2005)

 let car = new CarConstructor('AAA', 2005);

 console.log(car.year);