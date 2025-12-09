/*function showMessage() {
    alert( 'Hello everyone!')
}

showMessage();
showMessage(); */

/* function showMessage() {
    let message = "Hello, I'm JavaScript!";

    alert( message);
}

showMessage();

alert( message ); */

/* function showMessage (from, text = "no text given") {
    
    alert(from + ': ' + text);
}

showMessage("Ann"); */

/* function showMessage(text) {
    if (text === undefined) {
        text = 'empty message';
    }

    alert(text);
}

showMessage(); */ 

/*function showCount(count) {
    alert(count ?? "unknown");
}

showCount(0);
showCount(null);
showCount();*/

function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
alert( result );