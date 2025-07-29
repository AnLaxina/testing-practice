import { capitalize } from "./functions";

test("capitalize", () => {
  expect(capitalize("chicken")).toMatch("Chicken");
});
