/* Shopping done if statement
let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
    childAllowance = 10;
} else {
    childAllowance = 5;
} 
alert(childAllowance); */

/* Weather choice
const select = document.querySelector("select");
const para = document.querySelector("p");
let temperature = prompt("Enter temperature");

select.addEventListener("change", setWeather);

function setWeather() {
    const choice = select.value;

    if (choice === "sunny" && temperature < 86) {
            para.textContent = `It is ${temperature} degrees outside - nice and sunny. Let's go out to the beach, \
        or the park, and get an ice cream.`;
    } else if (choice === "sunny" && temperature >= 86) {
            para.textContent = `It is ${temperature} degrees outside - REALLY HOT! If you want to go \
        outside, make sure to put some sunscreen on.`;
    } else if (choice === "rainy") {
        para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and \
        don't stay out for too long.";
    } else if (choice === "snowing") {
        para.textContent = "The snow is coming down - it is freezing! Best to stay in with a \
        cup of hot chocolate, or go build a snowman."
    } else if (choice === "overcast") {
        para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any \
        minute, so take a rain coat just in case."
    } else {
        para.textContent = "";
    } 
}
*/

/*
let cheese = "Cheddar";

if (cheese) {
    console.log("Yay! Cheese available for making cheese on toast.");
} else {
    console.log("No cheese on toast for you today.");
}
let shoppingDone = false;
let childAllowance;

if (shoppingDone) {
    childAllowance = 10;
} else {
    childAllowance =5;
}
console.log(childAllowance);
*/

/* OR Example
let iceCreamVanOutside, housestatus;

if (!(iceCreamVanOutside || housestatus === "on fire")) {
    console.log("Probably should just stay in then.");
} else {
    console.log("You should leave the house quickly.");
}
*/

// Multiple logical statements
let x, y = 4, z, loggedIn, userName;

if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
    console.log("The code ran");
}