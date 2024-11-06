// * Car class
class Car {
  // * Properties
  make: string;
  model: string;
  year: number;

  // * Constructor
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // * getCarAge method
  getCarAge(): number {
    // * Get the current year and subtract the year of the car
    // * by using the Date object
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();

// Sample Output 1:
// console.log(car.getCarAge());