/*Example 1

const a = "Hello";
const b = "World";

console.log(c);
*/

/*Example 2
const a = 5;
const b = 10;

function add() {
    return c;
}

function print() {
    add();
}

print();
*/

/*Example 3

function helloWorld() {
    console.log "Hello World!"
}
*/

/*Example 4

const str1 = "Hello";

const str2 = " World";

const message = str1.concat(str2);

console.log(message);
*/

/*ReferenceError Catch MDN

try {
    let a = undefinedVariable;
} catch (e) {
    console.log(e instanceof ReferenceError);
    console.log(e.message);
    console.log(e.name);
    console.log(e.stack);
}
*/

/*ReferenceError Create MDN

try {
    throw new ReferenceError("Hello");
} catch (e) {
    console.log(e instanceof ReferenceError);
    console.log(e.message);
    console.log(e.name);
    console.log(e.stack);
}
*/

/*SyntaxError Catch MDN

try {
    eval("hoo bar");
} catch (e) {
    console.log(e instanceof SyntaxError);
    console.log(e.message);
    console.log(e.name);
    console.log(e.stack);
}
*/

//SyntaxError Create MDN

try {
    throw new SyntaxError("Hello");
} catch (e) {
    console.log(e instanceof SyntaxError);
    console.log(e.message);
    console.log(e.name);
    console.log(e.stack);
}
