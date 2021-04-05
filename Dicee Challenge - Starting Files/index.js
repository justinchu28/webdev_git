var randomNumber1 =  Math.floor(6 * Math.random()) + 1;

var leftimg = document.querySelector(".img1");
leftimg.setAttribute("src", "images/" + "dice" + randomNumber1 + ".png");


var randomNumber2 =  Math.floor(6 * Math.random()) + 1;
var rightimg = document.querySelector(".img2");
rightimg.setAttribute("src", "images/" + "dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player 2 Wins!";
}
else {
  document.querySelector("h1").textContent = "Draw!";
}
