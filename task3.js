  // 3)
  
  // CarConstructor creates cars but what if someone decides to call it without new keyword,
  // write a logic inside the CarConstructor function so it checks if the CarConstructor is called without
  // new keyword it logs "please call me with new keyword" if not it creates a car
  
  function CarConstructor(model, year) {
    this.mode = model;
    this.year = year;
  }
  
 