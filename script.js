// Generate random number
// Assign number to move
// Return computer's result
// 
//
const choices = ["rock", "paper", "scissors"];
//  Generate random number 1-3 

function computerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}
// Determines winner of the round or if it is a tie

function determineWinner(computerChoice, userChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!"
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}
// Creates a function that grabs the results
function displayResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = result;
}
// plays a game round
function playGame(userChoice) {
    const computer = computerChoice();
    const result = determineWinner(userChoice, computer);
    displayResult(result);
}

const rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", () => playGame("rock"));

const paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", () => playGame("paper"));

const scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", () => playGame("scissors"));

