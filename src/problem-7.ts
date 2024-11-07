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
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}