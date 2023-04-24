import { capitalize } from "./strings";

test("Capitalizes the first character in a string", () => {
  expect(capitalize("testing")).toBe("Testing");
});
