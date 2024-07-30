// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("accepts a string and returns a boolean for whether the string is a palindrome", () => {
    const word = "racecar";

    const result = isPalindrome(word);

    expect(result).toBe(true);
  });
  it("returns true for palindromes wiht uppercase letters", () => {
    const word = "rAcEcAr";

    const result = isPalindrome(word);

    expect(result).toBe(true);
  });
  it("returns false for an empty string", () => {
    const word = "";

    const result = isPalindrome(word);

    expect(result).toBe(false);
  });
});