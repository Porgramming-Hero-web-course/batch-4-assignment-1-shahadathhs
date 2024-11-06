// * Function to return the sum of all numbers in an array
const sumArray = (array: Array<number>): number => {
  let sum: number = 0;
  for (const element of array) {
    sum += element;
  }
  return sum;
}

// * Call the function with an array of numbers
const array: Array<number> = [1, 2, 3, 4, 5];
const result: number = sumArray(array);
console.log(result);