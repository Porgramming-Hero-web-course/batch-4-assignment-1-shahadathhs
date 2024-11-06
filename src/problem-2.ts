// * Function to return a new array with duplicates removed
const removeDuplicates = (array: Array<number>): Array<number> => {
  // * With Set constructor to remove duplicates
  // return [...new Set(array)];

  // * Without Set constructor to remove duplicates
  // * Here we are using filter function to remove duplicates by using indexOf, 
  // * which returns the index of the first occurrence of the element in the array
  // * or 1 if the element is not found
  return array.filter((value, index) => array.indexOf(value) === index);
};


// * Call the function with an array of numbers which contains duplicates
const arrayOfDuplicates: Array<number> = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// const result: Array<number> = removeDuplicates(arrayOfDuplicates);
// console.log(result);
removeDuplicates(arrayOfDuplicates);