// * Profile Interface
interface Profile {
  name: string;
  age: number;
  email: string;
}

// * Function to take a object and a partial object to update the first object
const updateProfile = (profile: Profile, updatedValue: Partial<Profile>): Profile => {
  return {...profile, ...updatedValue};
}