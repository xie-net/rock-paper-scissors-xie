/*1 = rock, 2 - paper, 3 - scissors*/

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

    function playRound(humanChoice, computerChoice) {
        const lowerHumanChoice = humanChoice.toLowerCase();

        switch (lowerHumanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    console.log("You lose! Paper beats rock.")
                    computerScore += 1;
                } else if (computerChoice === "scissors") {
                    console.log("You win! Rock beats Scissors.");
                    humanScore += 1;
                } else {
                    console.log("It's a tie!");
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    console.log("You win! Paper beats rock.")
                    humanScore += 1;
                } else if (computerChoice === "scissors") {
                    console.log("You lose! Scissors beats Paper.");
                    computerScore += 1;
                } else {
                    console.log("It's a tie!");
                }
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    console.log("You lose! Rock beats Scissors.")
                    computerScore += 1;
                } else if (computerChoice === "paper") {
                    console.log("You win! Scissors beats Paper.");
                    humanScore += 1;
                } else {
                    console.log("It's a tie!");
                }
                break;
            default:
                console.log("uh oh, something went wrong?");
        
        }

    }

    let answer = prompt('Would you like to play rock paper scissors? Y or N','');
    answer = answer.toLowerCase();

    if (answer === 'y') {
        for (let i = 1; i <= 5; i++) {
            console.log(`Round ${i}! Fight!`);
            let humanSelection = getHumanChoice();
            let computerSelection = getComputerChoice();
          
            playRound(humanSelection, computerSelection);
       
             console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
        }

        if (humanScore > computerScore) {
            console.log("You win! Congrats!");
        } else if (humanScore < computerScore) {
            console.log("You lost! Oh no :(");
        } else {
            console.log("It's a tie!!!");
        }

    } else {
        console.log("Are you sure?");
    }

}

playGame();
