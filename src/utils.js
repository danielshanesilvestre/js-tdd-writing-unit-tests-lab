// Your code here

export function isPalindrome(word) {
  if (word.length === 0)
    return false;

  let end = (word.length - (word.length % 2)) / 2;

  let lowercaseWord = word.toLowerCase();

  for (let i = 0; i < end; i++) {
    if (lowercaseWord[i] !== lowercaseWord[word.length - 1 - i]) {
      return false;
    }
  }

  return true;
}