function favouriteAnimal(animal) {
    return animal + " is my favourite animal!"
}

let animal = prompt("What's your favourite animal?","")
const message = favouriteAnimal(animal)
console.log(message)
alert(message);