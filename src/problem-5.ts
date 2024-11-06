// * A Generic Function which the property value after taking an  object and a property name as arguments

// * Here, T is the type of the object and K is the type of the property name
// * K must be a key of T
// * T[K] is the type of the property value
const getProperty = <T, K extends keyof T>(object: T, key: K): T[K] => {
  // * Return the property value from the object
  return object[key];
}

// Sample Input:
const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));
getProperty(person, "name")
