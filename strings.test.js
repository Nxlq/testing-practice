import { capitalize } from "./strings";
import { reverseString } from "./strings";
import { caesarCipher } from "./strings";

// CAPITALIZE

test("Capitalizes the first character in a string", () => {
  expect(capitalize("testing")).toBe("Testing");
});

test("If the string is already capitalized", () => {
  expect(capitalize("Already")).toBe("That string is already capitalized :D");
});

test('If the string passed in is ""', () => {
  expect(capitalize("")).toBe(undefined);
});

// REVERSE STRING

test('The given string "test" is returned in reverse order "tset"', () => {
  expect(reverseString("test")).toBe("tset");
});

test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverses an empty string", () => {
  expect(reverseString("")).toBe("");
});

test("does not modify a one-character string", () => {
  expect(reverseString("x")).toBe("x");
});

test("reverses a string with spaces and special characters", () => {
  expect(reverseString("!dlrow olleH")).toBe("Hello world!");
});

test("throws an error if input is not a string", () => {
  expect(() => reverseString(null)).toThrow();
});

// CAESAR CIPHER
test("shifts characters by a positive factor", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("shifts characters by a negative factor", () => {
  expect(caesarCipher("khoor", -3)).toBe("hello");
});

test("shifts characters by a factor larger than the alphabet length", () => {
  expect(caesarCipher("abc", 30)).toBe("efg");
});

test("shifts characters in a string with spaces and special characters", () => {
  expect(caesarCipher("!hello, world?", 5)).toBe("!mjqqt, btwqi?");
});

test("does not modify an empty string", () => {
  expect(caesarCipher("", 5)).toBe("");
});
