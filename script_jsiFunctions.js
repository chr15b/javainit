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

function showMessage (from, text) {
    
    from = '*' + from + '*';
    
    alert(from + ': ' + text);
}

let from = "Ann";

showMessage(from, 'Hello!');

alert( from );