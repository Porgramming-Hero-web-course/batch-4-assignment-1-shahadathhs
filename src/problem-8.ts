// * Function to take a object and an array of its keys as arguments
// * Return true if object has all the keys in the array
// * Return false if not
const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
  // * Loop through the array of keys
  for (const key of keys) {
    // * Check if the key is present in the object
    if (key in Object(obj) === false) {
      return false;
    }
  }
  return true;
}

// Sample Input One:
const personKey = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(personKey, ["name", "age"]));