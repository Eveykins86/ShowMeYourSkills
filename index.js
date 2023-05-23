// Quiz questions and choices

let quizQuestions = [
    {
        question: "Commonly use data types DO NOT include",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAnswer: 2,
    },
    {
        question: "The condition in an if / else statement is enclosed with _________.",
        choices: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brakets"],
        correctAnswer: 2,
    },
    {
        question: "Arrays in JavaScript can be used to store _________.",
        choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
        correctAnswer: 3,
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        correctAnswer: 2,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"],
        correctAnswer: 3,
    }
];

//Variables
var startButton = document.getElementById("start-button");
var timerSpan = document.getElementById("time-left");
var timerElement = document.getElementById("timer")
var timeLeft = 75
var gameInterval;

//Track current question and user's score
var currentQuestion = 0;
var score = 0;

//Function to start game
function startGame() {
    startButton.style.display = "none";
    timerSpan.textContent = "Time Remaining: " + timeLeft + " seconds";
    gameInterval = setInterval(function() {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(gameInterval);
        showFinalScore();
      }
    }, 1000);
  }

//Function to display the current question and choices
function displayQuestion() {
    timerElement.textContent = "Time Remaining: " + timeLeft + " seconds";
    var questionElement = document.getElementById("question");
    var choicesElement = document.getElementById("choices");

    questionElement.textContent = "";
    choicesElement.innerHTML = "";

    questionElement.textContent = quizQuestions[currentQuestion].question;

    for (var i = 0; i < quizQuestions[currentQuestion].choices.length; i++) {
        var choices = document.createElement("li");
        choices.textContent = quizQuestions[currentQuestion].choices[i];
        choices.setAttribute("data-index", i)
        choices.onclick = checkSelectedAnswer;
        choicesElement.appendChild(choices);
    }
    }

//Function to check the selected answer and increase score
function checkSelectedAnswer() {
    var selectedOption = parseInt(this.getAttribute("data-index"));
    
    if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
      score++;
      this.textContent = "CORRECT!";
      this.classList.remove("wrong");
      this.classList.add("correct");
    } else {
      this.textContent = "WRONG!";
      this.classList.remove("correct");
      this.classList.add("wrong");
      timeLeft -= 10;
      if (timeLeft < 0) {
        timeLeft = 0;
      }
    }

//Move to the next question or show the final score

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        setTimeout(displayQuestion, 1000);
    } else {
      clearInterval(gameInterval);
      showFinalScore();
    }
  }

//Function to show the final score
function showFinalScore() {
    var questionElement = document.getElementById("question");
    var choicesElement = document.getElementById("choices");

    var finalScore = timeLeft;
    var showFinalScoreElement = document.createElement("p");
    showFinalScoreElement.textContent = "Your Score: " + finalScore + "!";
    showFinalScoreElement.id = "final-score";
    document.body.appendChild(showFinalScoreElement);

    questionElement.textContent = "";
    choicesElement.innerHTML = "";

//Promt player to enter initals
    alert("Your Score: " + finalScore +"!");
    var playerInitials = prompt("Enter your initials:");

//Store the plyer initals and high score in local storage
    localStorage.setItem("playerInitials", playerInitials);
    localStorage.setItem("highScore", finalScore);
    window.location.href = "highscores.html";

}

startButton.addEventListener("click", () => {
    startGame();
    displayQuestion();
})

        // Calls function to store player and score
        //
