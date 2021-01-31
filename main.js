let numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let e = 0; e < numberOfDrumButtons; e++)
  document.querySelectorAll(".drum")[e].addEventListener("click", function () {
    let e = this.innerHTML;
    makeSound(e), buttonAnimation(e);
  });
function makeSound(e) {
  switch (e) {
    case "w":
      new Audio("./sounds/crash.mp3").play();
    case "a":
      new Audio("./sounds/kick-bass.mp3").play();
    case "s":
      new Audio("./sounds/snare.mp3").play();
    case "d":
      new Audio("./sounds/tom-1.mp3").play();
    case "j":
      new Audio("./sounds/tom-2.mp3").play();
    case "k":
      new Audio("./sounds/tom-3.mp3").play();
    case "l":
      new Audio("./sounds/tom-4.mp3").play();
  }
}
function buttonAnimation(e) {
  let n = document.querySelector("." + e);
  n.classList.add("pressed"),
    setTimeout(function () {
      n.classList.remove("pressed");
    }, 100);
}
document.addEventListener("keypress", function (e) {
  makeSound(e.key), buttonAnimation(e.key);
});
