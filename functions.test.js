import { capitalize, reverseString, caesarCipher } from "./functions";

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
