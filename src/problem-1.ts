// * Function to return the sum of all numbers in an array
const sumArray = (array: Array<number>): number => {
  // * Using Loop
  // let sum: number = 0;
  // for (const element of array) {
  //   sum += element;
  // }
  // return sum;
  // * Using reduce function
  return array.reduce((sum: number, element: number) => sum + element, 0);
}