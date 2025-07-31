export function isUpperCase(stringToCompare) {
  const upperCaseString = stringToCompare.toUpperCase();
  return stringToCompare === upperCaseString;
}

export function isLowerCase(stringToCompare) {
  const lowerCaseString = stringToCompare.toLowerCase();
  return stringToCompare === lowerCaseString;
}

export function shiftIndex(letter, caseArray, shiftFactor) {
  // Keeping the alphabetLength helps with wrapping it around with just the alphabet
  const alphabetLength = caseArray.length;
  // Doing this helps account for negative shifts (going towards the left)
  let shiftedIndex = (caseArray.indexOf(letter) + shiftFactor) % alphabetLength;

  if (shiftedIndex < 0) {
    shiftedIndex += alphabetLength;
  }

  return shiftedIndex;
}

export function isLetter(char) {
  return char.length === 1 && /[a-zA-Z]/.test(char);
}
