export function capitalize(string) {
  if (!string) return;
  if (string.charAt(0) === string.charAt(0).toUpperCase())
    return "That string is already capitalized :D";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return string.split("").reverse().join("");
}

export function caesarCipher(string, shiftAmount) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const cipher = string
    .split("")
    .map((letter) => {
      // if the letter is a special character
      if (!alphabet.includes(letter)) return letter;
      let newIndex = alphabet.indexOf(letter.toLowerCase()) + shiftAmount;

      // check if the new Index is shifted beyond the the last letter in the alphabet
      if (newIndex > 26) newIndex -= 26;
      const newLetter = alphabet[newIndex];

      if (letter === letter.toUpperCase()) return newLetter.toUpperCase();
      return newLetter;
    })
    .join("");

  return cipher;
}
