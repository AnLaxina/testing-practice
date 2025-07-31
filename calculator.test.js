import { Calculator } from "./calculator";

describe("Calculator", () => {
  test("Adding 2 + 2 from Calculator should be 4", () => {
    expect(Calculator.add(2, 2)).toBe(4);
  });
  test("Subtracting 2 - 2 from Calculator should be 0", () => {
    expect(Calculator.subtract(2, 2)).toBe(0);
  });
  test("Multiplying 2 * 3 from Calculator should be 6", () => {
    expect(Calculator.multiply(2, 3)).toBe(6);
  });
  test("Dividing 8 / 8 from Calculator should be 1", () => {
    expect(Calculator.divide(8, 8)).toBe(1);
  });
});
