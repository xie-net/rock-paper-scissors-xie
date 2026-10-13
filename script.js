/*1 = rock, 2 - paper, 3 - scissors*/
const results = document.querySelector("#rpsResults");


function getComputerChoice () {
    let result = Math.floor(Math.random() * 3) + 1;

    let computerChoice = (result <= 1) ? 'rock' :
        (result <= 2) ? 'paper' :
        (result <= 3) ? 'scissors' : '';

    return computerChoice;
}

function getHumanChoice () {
    let humanChoice = prompt('Enter "Rock", "Paper", or "Scissors"', '');

    return humanChoice;

}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;

    

    function playRound(humanChoice, computerChoice) {
        const lowerHumanChoice = humanChoice.toLowerCase();

        if (roundCount === 5) {
        return;
        }
        switch (lowerHumanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    displayMessage("You lose! Paper beats rock.")
                    computerScore += 1;
                } else if (computerChoice === "scissors") {
                    displayMessage("You win! Rock beats Scissors.");
                    humanScore += 1;
                } else {
                    displayMessage("It's a tie!");
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    displayMessage("You win! Paper beats rock.")
                    humanScore += 1;
                } else if (computerChoice === "scissors") {
                    displayMessage("You lose! Scissors beats Paper.");
                    computerScore += 1;
                } else {
                    displayMessage("It's a tie!");
                }
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    displayMessage("You lose! Rock beats Scissors.")
                    computerScore += 1;
                } else if (computerChoice === "paper") {
                    displayMessage("You win! Scissors beats Paper.");
                    humanScore += 1;
                } else {
                    displayMessage("It's a tie!");
                }
                break;
            default:
                displayMessage("uh oh, something went wrong?");
        
        }

    displayMessage(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
    roundCount += 1;

    if (roundCount === 5) {
        if (roundCount === 5) {
    if (humanScore > computerScore) {
        displayMessage("You win! Congrats!");
    } else if (humanScore < computerScore) {
        displayMessage("You lost! Oh no :(");
    } else {
        displayMessage("It's a tie!!!");
    }
}
    };
    }

    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");


    rockButton.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    paperButton.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
    scissorsButton.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });

}

function displayMessage(message) {
    let para = document.createElement("p");
    para.textContent = message;
    results.appendChild(para);
}

playGame();
