import { capitalize, reverseString } from "./functions";

test("capitalize", () => {
  expect(capitalize("chicken")).toMatch("Chicken");
});

test("Reverse a string", () => {
  expect(reverseString("Chicken")).toMatch("nekcihC");
});
