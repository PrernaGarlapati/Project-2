// Game elements
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");
const actionMessage = document.getElementById("action-message");

// Scores
let userScore = 0;
let compScore = 0;

// Computer choice
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Convert letter to word
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

// Win function
function win(userChoice, computerChoice) {
  userScore++;
  userScoreSpan.textContent = userScore;
  resultDiv.textContent = `${convertToWord(userChoice)} beats ${convertToWord(
    computerChoice
  )}. You win!`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("green-glow"),
    500
  );
  actionMessage.textContent = "Keep playing!";
}

// Lose function
function lose(userChoice, computerChoice) {
  compScore++;
  compScoreSpan.textContent = compScore;
  resultDiv.textContent = `${convertToWord(
    userChoice
  )} loses to ${convertToWord(computerChoice)}. You lost!`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("red-glow"),
    500
  );
  actionMessage.textContent = "Try again!";
}

// Draw function
function draw(userChoice, computerChoice) {
  resultDiv.textContent = `${convertToWord(userChoice)} equals ${convertToWord(
    computerChoice
  )}. It's a draw!`;
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("gray-glow"),
    500
  );
  actionMessage.textContent = "Choose again!";
}

// Game function
function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

// Event listeners
rockDiv.addEventListener("click", () => game("r"));
paperDiv.addEventListener("click", () => game("p"));
scissorsDiv.addEventListener("click", () => game("s"));

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (e.key === "r") game("r");
  if (e.key === "p") game("p");
  if (e.key === "s") game("s");
});
