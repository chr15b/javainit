/* Initial function expressions

function sayHi() {
    alert( "Hello");
}

let func = sayHi;

func();
sayHi();
*/

// Callback function

function ask(question, yes, no) {
    if (confirm(question)) yes()
        else no();
}

function showOk() {
    alert( "You agreed.");
}

function showCancel() {
    alert( "You cancelled the execution.");
}

ask("Do you agree?", showOk, showCancel);