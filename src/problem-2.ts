// * Function to return a new array with duplicates removed
const removeDuplicates = (array: Array<number>): Array<number> => {
  // * With Set constructor to remove duplicates
  return [...new Set(array)];

  // * Without Set constructor to remove duplicates
  // return array.filter((value, index) => array.indexOf(value) === index);
};