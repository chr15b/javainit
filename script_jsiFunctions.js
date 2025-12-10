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

/* function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
alert( result ); */

/* function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm("Do you have permission from your parents?");
    }
}

let age = prompt('How old are you?', '18');

if ( checkAge(age) ) {
    alert( 'Access granted');
} else {
    alert( 'Access denied');
} */

// Task 2

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
  }