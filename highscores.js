//Button variables
var newGameButton = document.getElementById("highscorebtn")
var clearScoresButton = document.getElementById("clearhs")
var highScoresTable = document.getElementById("high-scores-table")

// Retrieve the stored player initials and high score from local storage
var playerInitials = localStorage.getItem("playerInitials");
var highScore = localStorage.getItem("highScore");

// Set the text content of the player initials and high score elements
var playerInitialsElement = document.getElementById("player-initials");
var highScoreElement = document.getElementById("high-score");

playerInitialsElement.textContent = playerInitials;
highScoreElement.textContent = highScore;

//Get the existing high scores from local storage or initialize an empty array
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Add the current player's score to the high scores array
var newScore = { initials: playerInitials, score: (highScore) };
highScores.push(newScore);

// Sort the high scores array in descending order
highScores.sort(function(a, b) {
  return b.score - a.score;
});

// Truncate the array to contain only the top 5 high scores
highScores = highScores.slice(0, 5);

// Update the high scores table
var tableBody = document.getElementById("high-scores-table").getElementsByTagName("tbody")[0];

for (var i in highScores) {
    var row = tableBody.appendChild(document.createElement("tr"));
    var initialsCell = row.appendChild(document.createElement("td"));
    var scoreCell = row.appendChild(document.createElement("td"));
    initialsCell.textContent = highScores[i].initials;
    scoreCell.textContent = highScores[i].score;
  }

// Store the updated high scores back to local storage
localStorage.setItem("highScores", JSON.stringify(highScores));

//Return to Game button
newGameButton.addEventListener("click", () => {
    window.location.href = "index.html"
});

//Clear High Scores Button
clearScoresButton.addEventListener("click", () => {
    localStorage.removeItem("playerInitials");
    localStorage.removeItem("highScores");
    highScoresTable.innerHTML = "<tr><th>Player Initials</th><th>Score</th></tr>";
})