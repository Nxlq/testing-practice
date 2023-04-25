import { analyzeArray } from "./analyze-array";

test("object returned contains a valid property 'average'", () => {
  expect(analyzeArray([1, 2, 3, 4]).average).toBe(2.5);
});

test('object returned contains a valid property "min" which contains the lowest value in the array', () => {
  expect(analyzeArray([1, 2, 3, 4]).min).toBe(1);
});

test('object returned contains a valid property "max" which contains the highest value in the array', () => {
  expect(analyzeArray([1, 2, 3, 4]).max).toBe(4);
});

test('object returned contains a valid property "length" which contains the length of the array', () => {
  expect(analyzeArray([1, 2, 3, 4]).length).toBe(4);
});
