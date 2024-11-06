// * Function to return the sum of all numbers in an array
const sumArray = (array: Array<number>): number => {
  // * Step-1: Create a variable to store the sum
  let sum: number = 0;
  // * Step-2: Loop through the array and add each element to the sum
  for (const element of array) {
    sum += element;
  }
  // * Step-3: Return the sum
  return sum;
}

// * Call the function with some array of numbers
const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5];
// const result: number = sumArray(arrayOfNumbers);
// console.log(result);
sumArray(arrayOfNumbers);