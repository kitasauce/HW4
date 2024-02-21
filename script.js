var startbtn = document.querySelector(".start");
var questions = document.querySelector(".question-container")
var answers = document.querySelectorAll(".answers")

startbtn.addEventListener("click", startButton);

function startButton() {
    console.log("started");
    startbtn.style.display = "none";
    showquestions();
};  

function showquestions() {
  questions.style.visibility = "visible";
  answers.forEach(answers => {
  answers.style.visibility = "visible";
});
};

var countdown = function(num) {
    for (var i = num; i > 0; i--) {
      console.log(i);
    }
  };
