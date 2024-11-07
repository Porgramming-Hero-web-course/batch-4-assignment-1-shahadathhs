// * Function to return the count of a word (case insensitive) in a sentence
const countWordOccurrences = (sentence: string, paramWord: string): number => {
  const words: Array<string> = sentence.split(" ");
  let count: number = 0;

  for (const word of words) {
    if (word.toLowerCase() === paramWord.toLowerCase()) {
      count++;
    }
  }

  return count;
}
