// * Function to take a object and an array of its keys as arguments
// * Return true if object has all the keys in the array, and if not return false
const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
  // * Loop through the array of keys
  for (const key of keys) {
    // * Check if the key is present in the object
    if (!(key in Object(obj))) {
      return false;
    }
  }
  return true;
}