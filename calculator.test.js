import { calculator } from "./calculator";

test("adds 2 + 2 to equal 4", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("subtracts 10 - 5 to equal 5", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test("multiplies 10 x 200 to equal 2000", () => {
  expect(calculator.multiply(10, 200)).toBe(2000);
});

test("divides 130 by 10 to equal 13", () => {
  expect(calculator.divide(130, 10)).toBe(13);
});
