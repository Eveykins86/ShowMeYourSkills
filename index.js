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
        correctAnswer: 3,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debbuer is:",
        choices: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"],
        correctAnswer: 3,
    }
];

var currentQuestion = 0;
var score = 0;

//Function to display the current question and choices
function displayQuestion() {
    var questionElement = document.getElementById("question");
    var choicesElement = document.getElementById("choices");

    questionElement.textContent = quizQuestions[currentQuestion].question;

    for (var i = 0; i < quizQuestions[currentQuestion].choices.length; i++) {
        var choices = document.createElement("li");
        choices.textContent = quizQuestions[currentQuestion].choices[i];
        choices.setAttribute("data-index", i);
        choices.onclick = checkSelectedAnswer;
        choicesElement.appendChild(choices);
    }
}
