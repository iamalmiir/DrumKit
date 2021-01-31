let allande = document
  .querySelector(".set")
  .addEventListener("keypress", function (e) {
    let crash = new Audio("./sounds/crash.mp3");
    let kickbass = new Audio("./sounds/kick-bass.mp3");
    let snare = new Audio("./sounds/snare.mp3");
    let tom1 = new Audio("./sounds/tom-1.mp3");
    let tom2 = new Audio("./sounds/tom-2.mp3");
    let tom3 = new Audio("./sounds/tom-3.mp3");
    let tom4 = new Audio("./sounds/tom-4.mp3");
    if (e.key === "w") {
      crash.play();
    } else if (e.key === "a") {
      kickbass.play();
    } else if (e.key === "s") {
      snare.play();
    } else if (e.key === "d") {
      tom1.play();
    } else if (e.key === "j") {
      tom2.play();
    } else if (e.key === "k") {
      tom3.play();
    } else if (e.key === "l") {
      tom4.play();
    }
  });
