// 2)
  
  // The following code does not work turn it into working code
  
  const flights = {
    flights: [],
  
    priorityFlights: [],
  
    scheduleFlight(flight) {
      this.flights.push(flight);
    },
  
    removeFlight(flight) {
      if (this.flights.includes(flight)) {
        this.flights = this.flights.filter(el => el !== flight);
      }
      if (this.priorityFlights.includes(flight)) {
        this.priorityFlights = this.priorityFlights.filter(el => el !== flight);
      }
    },
  
    makePriorityFlight(flight) {
      this.priorityFlights.push(flight);
    },
  };
  
  flights.scheduleFlight("1");
  flights.scheduleFlight("2");
  flights.scheduleFlight("3");
  flights.scheduleFlight("4");
  
  flights.makePriorityFlight("1");
  flights.makePriorityFlight("2");
  
  flights.removeFlight("1");
  
  console.log(flights.flights);
  console.log(flights.priorityFlights);
  
  