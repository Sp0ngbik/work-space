const genericNumber: Array<number> = [1, 2, 3, 4, 5];
const genericString: Array<string> = ["Hello", "Vlad"];

function genericFunction<arrayGeneric>(array: arrayGeneric[]) {
  return array.reverse();
}

console.log(genericFunction(genericNumber));
console.log(genericFunction(genericString));
