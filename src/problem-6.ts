// * Profile Interface
interface Profile {
  name: string;
  age: number;
  email: string;
}

// * Function to take a object and a partial object to update the first object
const updateProfile = (profile: Profile, updatedValue: Partial<Profile>): Profile => {
  // * Spread operator to create a new object with the updated values
  return {...profile, ...updatedValue};
}

// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
