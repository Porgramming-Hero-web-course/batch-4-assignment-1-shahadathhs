// * A Generic Function which the property value after taking an  object and a property name as arguments
const getProperty = <T, K extends keyof T>(object: T, key: K): T[K] => {
  // * Return the property value from the object
  return object[key];
}