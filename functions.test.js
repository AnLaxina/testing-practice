import {
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray,
} from "./functions";

test("capitalize", () => {
  expect(capitalize("chicken")).toBe("Chicken");
});

test("Reverse a string", () => {
  expect(reverseString("Chicken")).toBe("nekcihC");
});

describe("Caesar Cipher", () => {
  test("wrap around alphabet", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("retains case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("retains non-alphabetical characters", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("Analyze Array", () => {
  const arrayToTest = [1, 8, 3, 4, 2, 6];
  test("min", () => {
    expect(analyzeArray(arrayToTest).min).toBe(1);
  });

  test("max", () => {
    expect(analyzeArray(arrayToTest).max).toBe(8);
  });

  test("length", () => {
    expect(analyzeArray(arrayToTest).length).toBe(6);
  });

  test("average", () => {
    expect(analyzeArray(arrayToTest).average).toBe(4);
  });
});
