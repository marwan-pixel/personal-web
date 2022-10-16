wordsToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
};

const morseToWords = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const convertToEnglish = (morse) => {
  return morse
    .split("  ")
    .map((el) =>
      el
        .split(" ")
        .map((b) => {
          return morseToWords[b] ? morseToWords[b] : b;
        })
        .join("")
    )
    .join(" ");
};

const convertToMorse = (str) => {
  return str
    .toUpperCase()
    .split("")
    .map((el) => {
      return wordsToMorse[el] ? wordsToMorse[el] : el;
    })
    .join(" / ");
};
function myFunction() {
  const inputMorse = document.querySelector("input").value;

  const result = document.getElementById("result");
  if (!inputMorse.match(/^[0-9a-zA-Z ]+$/)) {
    result.innerHTML = convertToEnglish(inputMorse).toUpperCase();
  } else {
    result.innerHTML = convertToMorse(inputMorse);
  }
}
