import { Calculator } from "./calculator";

test("Adding 2 + 2 from Calculator should be 4", () => {
  expect(Calculator.add(2, 2)).toEqual(4);
});
test("Subtracting 2 - 2 from Calculator should be 0", () => {
  expect(Calculator.subtract(2, 2)).toEqual(0);
});
test("Multiplying 2 * 3 from Calculator should be 6", () => {
  expect(Calculator.multiply(2, 3)).toEqual(6);
});
test("Dividing 8 / 8 from Calculator should be 1", () => {
  expect(Calculator.divide(8, 8)).toEqual(1);
});
