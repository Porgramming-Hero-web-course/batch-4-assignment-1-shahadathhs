// * Function to return the count of a word (case insensitive) in a sentence
const countWordOccurrences = (sentence: string, word: string): number => {
  // * There can be attached characters in the word (at start or at end), and it need to escape them
  const regex: RegExp = new RegExp(`\\b${word}\\b`, "gi");

  // * Convert the sentence into an array of words, split by space
  const words: Array<string> = sentence.split(" ");

  // * Step-1: Create a variable to store the count
  let count: number = 0;

  // * Step-2: Loop through the sentence and check if the word is present
  for (const word of words) {
    // * Convert the word to lowercase and check if it matches
    if (regex.test(word.toLowerCase())) {
      count++;
    }
  }

  // * Step-3: Return the count
  return count;
}

// * Call the function with a sentence and a word
const sentence: string = "TypeScript is great. I love TypeScript!";
const word: string = "typescript";
// const result: number = countWordOccurrences(sentence, word);
// console.log(result);
countWordOccurrences(sentence, word);