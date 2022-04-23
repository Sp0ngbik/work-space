interface tsNumberValues {
  x: number | undefined;
  y: number | undefined;
}

function wordDiscription(word: string) {
  return word.trim().toUpperCase();
}

function tsPosition(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }
  if (a && !b) {
    return {
      x: a,
      y: undefined,
    };
  }
  if (!a && b) {
    return {
      x: undefined,
      y: b,
    };
  }
  return { x: a, y: b };
}

console.log("empty", tsPosition());
console.log("a", tsPosition(2));
console.log("b", tsPosition(undefined, 2));
console.log("all", tsPosition(3, 2));
