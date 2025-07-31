import { capitalize, reverseString, caesarCipher } from "./functions";

test("capitalize", () => {
  expect(capitalize("chicken")).toMatch("Chicken");
});

test("Reverse a string", () => {
  expect(reverseString("Chicken")).toMatch("nekcihC");
});

test("Caesar Cipher Testing", () => {
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});
