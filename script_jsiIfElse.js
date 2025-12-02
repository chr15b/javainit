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

// Conditional operator ?
let accessAllowed
let age = prompt('How old are you?', '');

/*
if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
*/

accessAllowed = (age > 18) ? true : false;

alert(accessAllowed);

