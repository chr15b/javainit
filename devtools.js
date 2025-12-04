console.log('a');
console.log('b');
debugger;
console.log('c');

function sum(a, b) {
  let result = a + b; // DevTools pauses on this line.
  return result;
}
debug(sum); // Pass the function object, not a string.
sum();