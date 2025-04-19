

let number = Math.floor(Math.random()*10) +1 ;

let guess = prompt("Guess a random number from 1 - 10:");

if (guess === null || guess ==="") {
    alert("Please insert a value")
}

    guess = parseInt(guess);

if (isNaN(guess)) {
    alert("Input a valid number")
} 

if (number === guess) {
    alert(`Answer: ${number} Congratulations you guessd the right number.`)
} else {
    alert(`Answer: ${number} sorry you guessed the wrong number, try again.`);
}