import { isLetter, isLowerCase, isUpperCase, shiftIndex } from "./stringUtils";

export function capitalize(stringToCapitalize) {
  const firstLetter = stringToCapitalize.charAt(0);
  const firstLetterCapitalized = firstLetter.toUpperCase();
  const wordAfterFirstLetter = stringToCapitalize.slice(1);
  return firstLetterCapitalized + wordAfterFirstLetter;
}

export function reverseString(stringToReverse) {
  // This is the iterative way
  //   let newString = "";
  //   for (let i = stringToReverse.length - 1; i >= 0; i--) {
  //     const char = stringToReverse[i];
  //     newString += char;
  //   }
  //   return newString;

  // But a more concise way is to just convert the string into an array, reverse it, then join it back again so it's a string
  return stringToReverse.split("").reverse().join("");
}

export function caesarCipher(stringToShift, shiftFactor) {
  const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let shiftedString = "";

  for (const character of stringToShift) {
    if (isLetter(character)) {
      if (isLowerCase(character)) {
        const shiftedIndex = shiftIndex(
          character,
          lowerCaseCharacters,
          shiftFactor
        );
        shiftedString += lowerCaseCharacters[shiftedIndex];
      } else if (isUpperCase(character)) {
        const shiftedIndex = shiftIndex(
          character,
          upperCaseCharacters,
          shiftFactor
        );
        shiftedString += upperCaseCharacters[shiftedIndex];
      }
    } else {
      shiftedString += character;
    }
  }

  return shiftedString;
}

export function analyzeArray(arrayOfNumbers) {
  const min = Math.min(...arrayOfNumbers);
  const max = Math.max(...arrayOfNumbers);
  const length = arrayOfNumbers.length;

  const sum = arrayOfNumbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  const average = sum / arrayOfNumbers.length;

  return { average, min, max, length };
}
