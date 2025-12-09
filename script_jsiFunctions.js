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

function showMessage (from, text = "no text given") {
    
    alert(from + ': ' + text);
}

showMessage("Ann");