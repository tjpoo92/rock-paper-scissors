let playerScore = 0;
let computerScore = 0;

let playerSelection;
function playerPlay() {
    playerSelection = prompt(
        "Choose: rock, paper or scissors"
    ).toLowerCase();
    validation(playerSelection);
}
function validation(playerSelection) {
    while (!playerSelection.match(/^\s*(?:rock|paper|scissors)\s*$/i)) {
        playerSelection = prompt(
            "Please choose a valid option: rock, paper or scissors"
        ).toLowerCase();
    }
    return playerSelection;
}

let computerSelection;
function computerPlay() {
    computerSelection = Math.floor(Math.random() * 3 + 1);
    switch (computerSelection) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
            break;
    }
    return computerSelection;
}

let result;
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection == "Rock" && computerSelection == "paper":
        case playerSelection == "Paper" && computerSelection == "scissors":
        case playerSelection == "Scissors" && computerSelection == "rock":
            console.log(`YOU LOSE! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
            break;
        case playerSelection == "Paper" && computerSelection == "rock":
        case playerSelection == "Scissors" && computerSelection == "paper":
        case playerSelection == "Rock" && computerSelection == "scissors":
            console.log(`YOU WIN! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
            break;
        default:
            console.log("TIE GAME!");
    }
}
function game(e) {
    playerSelection = e.target.textContent;
    e.target.classList.add("selected");
    computerPlay();
    playRound(playerSelection, computerSelection);
}
// do {
// game();
// console.log(result);
// console.log(`${playerScore} : ${computerScore}`);
// } while (playerScore < 5 && computerScore < 5);
// if (playerScore == 5) console.log("Player wins!");
// if (computerScore == 5) console.log("Computer wins!");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
    button.addEventListener("click", game)
)