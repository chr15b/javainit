/* Example 1

let sum = (a, b) => a+ b;

alert( sum(1,2));

*/

/* Example 2

let double = n => n * 2;

alert(double(3));

*/

// Example 3

let age = prompt("What is your age?",18);

let welcome = (age < 18) ?
    () => alert("Hello!") :
    () => alert("Greetings!");

welcome();