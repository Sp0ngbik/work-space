function* test() {
  for (let i = 0; i <= 5; i++) {
    yield i;
  }
}

const check = test();
console.log(check.next());
console.log(check.next());
console.log(check.next());
console.log(check.next());
console.log(check.next());
console.log(check.next());
console.log(check.next());
