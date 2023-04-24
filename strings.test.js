import { capitalize } from "./strings";
import { reverseString } from "./strings";

test("Capitalizes the first character in a string", () => {
  expect(capitalize("testing")).toBe("Testing");
});

test("If the string is already capitalized", () => {
  expect(capitalize("Already")).toBe("That string is already capitalized :D");
});

test('If the string passed in is ""', () => {
  expect(capitalize("")).toBe(undefined);
});

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
