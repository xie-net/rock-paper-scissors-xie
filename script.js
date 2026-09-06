/*1 = rock, 2 - paper, 3 - scissors*/

function getComputerChoice () {
    let result = Math.floor(Math.random() * 3) + 1;

    let computerChoice = (result <= 1) ? 'Rock' :
        (result <= 2) ? 'Paper' :
        (result <= 3) ? 'Scissors' : '';

    return computerChoice;
}

function getHumanChoice () {
    let humanChoice = prompt('Enter "Rock", "Paper", or "Scissors"', '');

    console.log(humanChoice);

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const lowerHumanChoice = humanChoice.tolower();
    

}


