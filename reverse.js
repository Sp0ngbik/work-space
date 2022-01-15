let myString = "я текст наоборот переверни меня";

//перевернутые бувкы в словах
const funcReverseLetters = (str) => {
  let buffer = str.split("");
  let result = [];
  for (let i = 0; (i = buffer.length); i++) {
    result.push(buffer.pop());
  }
  return result.join("").split(" ");
};

console.log(funcReverseLetters(myString));

//Перевернутые слова
const reverseWords = (str) => {
  let buffer = str.split(" ");
  let total = [];
  for (let i = 0; (i = buffer.length); i++) {
    total.push(buffer.pop());
  }
  return total;
};

console.log(reverseWords(myString));

const arr = [1, 2, 3, 4, 5];
let b = arr.length - 1;
console.log(arr[Math.round(Math.random() * b)]);

let string = "влад супер чел";

const func = (str) => {
  let b = str
    .split(" ")
    .map((el) => {
      return el[0].toUpperCase() + el.substring(1);
    })
    .join(" ");
  return b;
};
console.log(func(string));

const arrForFunc = [[123], [456], [789]];

const funcArr = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      let num = arr[i][k];
      result.push(num);
    }
  }
  return result;
};

console.log(funcArr(arrForFunc));

console.log(true + false);
