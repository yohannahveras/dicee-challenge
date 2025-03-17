let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

let diceImage1 = "./images/dice" + randomNumber1 + ".png";
let diceImage2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", diceImage1);
document.querySelector(".img2").setAttribute("src", diceImage2);

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Play 2 Wins!";
}
else {
    document.querySelector("h1").textContent = "Play 1 Wins!";
};


