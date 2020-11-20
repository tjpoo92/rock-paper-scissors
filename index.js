let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;
const computer = document.getElementsByClassName("computer")
function computerPlay() {
    computerSelection = Math.floor(Math.random() * 3 + 1);
    switch (computerSelection) {
        case 1:
            computerSelection = "Rock";
            break;
        case 2:
            computerSelection = "Paper";
            break;
        case 3:
            computerSelection = "Scissors";
            break;
    }


    for (let i = 0; i < computer.length; i++) {
        let string = computer[i].textContent;

        if (string == computerSelection) {
            computer[i].classList.add("selected");


        }
        else {
            computer[i].classList.remove("selected")
        }
    }
    return computerSelection;
}


let presult = document.createElement("p");
presult.innerText = ""
let pscore = document.createElement("p");
let result = document.querySelector("#result")
function playRound(playerSelection, computerSelection) {

    switch (true) {
        case playerSelection == "Rock" && computerSelection == "Paper":
        case playerSelection == "Paper" && computerSelection == "Scissors":
        case playerSelection == "Scissors" && computerSelection == "Rock":
            presult.innerText = `YOU LOSE! ${computerSelection} beats ${playerSelection}`
            result.insertBefore(presult, null)
            computerScore++;
            pscore.innerText = `${playerScore} - ${computerScore}`
            result.insertBefore(pscore, null)
            break;
        case playerSelection == "Paper" && computerSelection == "Rock":
        case playerSelection == "Scissors" && computerSelection == "Paper":
        case playerSelection == "Rock" && computerSelection == "Scissors":
            presult.innerText = `YOU WIN! ${playerSelection} beats ${computerSelection}`
            result.insertBefore(presult, null)
            playerScore++;
            pscore.innerText = `${playerScore} - ${computerScore}`
            result.insertBefore(pscore, null)
            break;
        default:
            presult.innerText = "TIE GAME!"
            pscore.innerText = `${playerScore} - ${computerScore}`
            result.insertBefore(presult, null)
            result.insertBefore(pscore, null)
    }
}
function game(e) {
    playerSelection = e.target.textContent;
    document.querySelector("#submit").removeAttribute("disabled")
    for (let i = 0; i < buttons.length; i++) {
        let string = buttons[i].textContent;
        buttons[i].classList.remove("selected")
        if (string = playerSelection) {
            e.target.classList.add("selected");
        }
    }
    for (let i = 0; i < computer.length; i++) {
        computer[i].classList.remove("selected");

    }
}

function submitSelection(e) {
    computerPlay();
    if ((playerScore < 5) && (computerScore < 5)) {
        playRound(playerSelection, computerSelection)
    }
    else {
        playAgain()
    };

}
if (playerScore == 5) console.log("player wins")
if (computerScore == 5) console.log("computer wins")
if (playerScore == 5) { playAgain() };
if (computerScore == 5) { playAgain() };
function playAgain() {
    document.querySelector("#play-again").removeAttribute("disabled")
    document.querySelector("#submit").attribute = "disabled"
}

const buttons = document.getElementsByClassName("player");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", game);
}

const submit = document.querySelector("#submit").addEventListener("click", submitSelection);
