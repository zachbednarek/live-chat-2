var finalScore = document.querySelector("#finalScore");
var points = localStorage.getItem("finalScore");

finalScore.textContent = "Your score is a " + points + "/4.";