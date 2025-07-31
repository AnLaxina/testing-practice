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
  let stringToReturn = "";
  // I decided to make these a Hash Set, so that it would be easy to find if they exist at O(1) operation
  const lowerCaseCharactersSet = new Set(lowerCaseCharacters);
  const upperCaseCharactersSet = new Set(upperCaseCharacters);

  for (const letter of stringToShift) {
    if (isLowerCase(letter)) {
      const shiftedIndex = shiftIndex(letter, lowerCaseCharacters, shiftFactor);
      stringToReturn += lowerCaseCharacters[shiftedIndex];
    } else if (isUpperCase(letter)) {
      const shiftedIndex = shiftIndex(letter, upperCaseCharacters, shiftFactor);
      stringToReturn += upperCaseCharacters[shiftedIndex];
    }
  }

  return stringToReturn;
}

function isUpperCase(stringToCompare) {
  const upperCaseString = stringToCompare.toUpperCase();
  return stringToCompare === upperCaseString;
}

function isLowerCase(stringToCompare) {
  const lowerCaseString = stringToCompare.toLowerCase();
  return stringToCompare === lowerCaseString;
}

function shiftIndex(letter, caseArray, shiftFactor) {
  let shiftedIndex = caseArray.indexOf(letter) + shiftFactor;
  if (shiftedIndex > caseArray.length - 1) {
    shiftedIndex -= caseArray.length;
  }

  return shiftedIndex;
}
