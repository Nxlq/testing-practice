import { capitalize } from "./strings";

test("Capitalizes the first character in a string", () => {
  expect(capitalize("testing")).toBe("Testing");
});

test("If the string is already capitalized", () => {
  expect(capitalize("Already")).toBe("That string is already capitalized :D");
});

test('If the string passed in is ""', () => {
  expect(capitalize("")).toBe(undefined);
});
