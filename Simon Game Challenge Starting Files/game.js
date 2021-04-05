// alert("game.js loaded");

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = -1;
var numClicks = -1;


function nextSequence()
{
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];

    level += 1;
    $("h1").text("Level " +  level);

    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut().fadeIn()
    playSound(randomChosenColor);
}


$("[type='button']").click(handleButtonClick);

function handleButtonClick() {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    
    playSound(userChosenColor);
    animatePress(userChosenColor);
    console.log(gamePattern);
    console.log(userClickedPattern);

    numClicks += 1;
    console.log("num clicks" + numClicks);
    var correct = checkAnswer(numClicks);
    if (!correct) {
        numClicks = -1;
        level = -1;
        userClickedPattern.length = 0;
        gamePattern.length = 0;
        $("h1").text("Press a key to restart");
    }
    else if (level === numClicks)
    {
        setTimeout(1000);
        nextSequence();
        numClicks = -1;
        userClickedPattern.length = 0;
    }



}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    console.log("current color " + currentColor);
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}

function checkAnswer(currentLevel)
{
    console.log("game pattern")
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
        return true;
    }
    else {
        console.log("wrong");
        return false;
    }
}
$(document).keypress(function(event) {
    if (level === -1)
    {
        nextSequence();
    }
	//log which key was pressed on keypress
});






