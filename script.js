var startbtn = document.querySelector(".start");

startbtn.addEventListener("click", startButton);

function startButton() {
    console.log("started");
    startbtn.classList.add("hide");
    showquestions();
};  

function showquestions() {

};

var countdown = function(num) {
    for (var i = num; i > 0; i--) {
      console.log(i);
    }
  };
