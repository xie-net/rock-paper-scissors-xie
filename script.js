/*1 = rock, 2 - paper, 3 - scissors*/

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}

function getHumanChoice () {
    let humanChoice = prompt('Enter "Rock", "Paper", or "Scissors"', '');

    let humanResult = (humanChoice === 'Rock') ? 1 :
        (humanChoice === 'Paper') ? 2 :
        (humanChoice === 'Scissors') ? 3 : 0;

    return humanResult;

}

let humanScore = 0;
let computerScore = 0;




