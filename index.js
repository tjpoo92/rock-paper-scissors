let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;
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

    const computer = document.getElementsByClassName("computer")
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

let result;
function playRound(playerSelection, computerSelection) {
    let p = document.createElement("p");
    let result = document.querySelector("#result")
    switch (true) {
        case playerSelection == "Rock" && computerSelection == "Paper":
        case playerSelection == "Paper" && computerSelection == "Scissors":
        case playerSelection == "Scissors" && computerSelection == "Rock":
            p.innerText = `YOU LOSE! ${computerSelection} beats ${playerSelection}`
            result.insertBefore(p, null)
            console.log(`YOU LOSE! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
            break;
        case playerSelection == "Paper" && computerSelection == "Rock":
        case playerSelection == "Scissors" && computerSelection == "Paper":
        case playerSelection == "Rock" && computerSelection == "Scissors":
            p.innerText = `YOU WIN! ${playerSelection} beats ${computerSelection}`
            result.insertBefore(p, null)
            console.log(`YOU WIN! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
            break;
        default:
            p.innerText = "TIE GAME!"
            result.insertBefore(p, null)
            console.log("TIE GAME!");
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
}

function submitSelection(e) {
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

const buttons = document.getElementsByClassName("player");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", game);
}

const submit = document.querySelector("#submit").addEventListener("click", submitSelection);
