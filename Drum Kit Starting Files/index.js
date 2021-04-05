// alert("test");

// document.querySelectorAll("button").addEventListener("click", handleClick);
function handleClick() {
  // this.style.color = "white";
  var butInner = this.innerHTML;

  switch(butInner) {
    case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    default:
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
  }

}

var buttons = document.querySelectorAll(".drum");


for (var i = 0; i < buttons.length; i++)
{
  buttons[i].addEventListener("click", handleClick);

  
}

document.addEventListener("keypress", function() {
  alert("key pressed");

})