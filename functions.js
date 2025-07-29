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
  const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return isLowerCase("a");
}

function isUpperCase(stringToCompare) {
  const upperCaseString = stringToCompare.toUpperCase();
  return stringToCompare === upperCaseString;
}

function isLowerCase(stringToCompare) {
  const lowerCaseString = stringToCompare.toLowerCase();
  return stringToCompare === lowerCaseString;
}
