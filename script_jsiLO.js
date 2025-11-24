/* || OR exercises
alert ( true || true );
alert ( false || true );
alert ( true || false );
alert ( false || false );

if (1 || 0) {
    alert( 'truthy!' );
}

let hour = 9;

if (hour < 10 || hour >18) {
    alert('The office is closed.');
}

hour = 12;
let isWeekend = true;

if ( hour < 10 || hour > 18 || isWeekend) {
    alert('The office is closed.');
}

alert ( 1 || 0);

alert (null || 1);
alert (null || 0 || 1);

alert (undefined || null || 0);

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous");

true || alert("not printed");
false || alert("printed");
*/

/* && AND exercises
alert( true && true );
alert( false && true );
alert( true && false );
alert( false && false );

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    alert( 'The time is 12:30');
}

if (1 && 0) {
    alert( "won't work because the result is falsy");
}

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0);
alert( 1 && 5);

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5);
alert( 0 && "no matter what");

alert( 1 && 2 && null && 3 );

alert( 1 && 2 && 3 );

let x = 1;

(x > 0) && alert( 'Greater than zero!' );

x = 1;

if (x > 0) alert( 'Greater than zero! (correct way)');
*/

/* ! NOT Exercies

alert( !true );
alert( !0 );

alert( !!"non-empty string" );
alert( !!null );

alert( Boolean("non-empty string"));
alert( Boolean(null));

*/

/* Tasks
alert("1. 2")
alert( null || 2 || undefined );


alert( "2. 123") // 1 then 2
alert( alert(1) || 2 || alert(3) );


alert( "3. null");
alert ( 1 && null && 2 );


alert( "4. 1"); // 1 then undefind
alert( alert(1) && alert(2) );


alert( "5. 3");
alert( null || 2 && 3 || 4 );
*/

let age = 50
if ((age >=14) && (age<=90)) {
    alert( "6. Age between 14 & 90");
}