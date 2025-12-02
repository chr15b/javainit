// Code to support work from https://javascript.info/ifelse

/* IF Else
let year = prompt('In which year was ECMAScript-2015 specification published?','');

if (year < 2015) {
    alert( "Too early..." );
} else if (year > 2015) {
    alert( "Too late" );
} else {
    alert( "Exactly!" );
}

*/

/* Conditional operator ?
let accessAllowed
let age = prompt('How old are you?', '');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

accessAllowed = (age > 18) ? true : false;

alert(accessAllowed);
*/

/*Multiple ? operators
let age = prompt('age?', 18);

let message = ( age < 3) ? `Hi, baby!` :
    ( age < 18 ) ? `Hello!` :
    ( age < 100 ) ? `Greetings!` :
    `What an unusual age!`;

alert ( message );
*/

/*Non-traditional use of ? - Not a best practice as easier to read code in if else
let company = prompt('Which company created JavaScript?','');

(company == 'Netscape') ?
    alert('Right!') : alert ('Wrong.');

*/

/* Recommended alternative to non-traditional use of ? example
let company = prompt('Which company created JavaScript?','');

if (company == "Netscape") {
    alert('Right!');
} else {
    alert('Wrong.');
}

*/

//Tasks

//if (a string with zero)
//Will alert be shown - No x Any string except an empty one (and "0" is not empty) becomes true in the logical context.
if(0) {
    alert( 'Hello');
}
alert('all done');
