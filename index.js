const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.results');
const playerScores = document.querySelector('.playerScore');
const compScores = document.querySelector('.compScore');

let playerCounter = 0;
let compCounter = 0;

result.textContent = "Press a button to begin!";

rock.addEventListener('click', () => {
    let player = playerSelection('Rock');
    let comp = computerPlay();
    gameResults(comp, player);
});

paper.addEventListener('click', () => {
    let player = playerSelection('Paper');
    let comp = computerPlay();
    gameResults(comp, player);
});

scissors.addEventListener('click', () => {
    let player = playerSelection('Scissors');
    let comp = computerPlay();
    gameResults(comp, player);
});

const updateScore = (comp, player) => {
    if (comp === 5 || player === 5) {
        playerCounter = 0;
        compCounter = 0;
        playerScores.textContent = 0;
        compScores.textContent = 0;
        return player > comp ? result.textContent = "You won the first to five." : result.textContent = "You lost the first to five."
    }
}

const computerPlay = () => {
    let computerPick = " ";
    const randomPick = Math.floor((Math.random() * 3) + 1);
    if (randomPick === 1) {
        computerPick = "rock";
    }
    else if (randomPick === 2) {
        computerPick = "scissors";
    }
    else {
        computerPick = "paper";
    }
    return computerPick;
}

const playerSelection = (selection) => {
    return selection;
}

const gameResults = (computerPlay, playerSelection) => {
    let player = playerSelection.toLowerCase();
    if (computerPlay === "rock") {
        if (player === "paper") {
            result.textContent = "Leaf beats Coconut! You Win!";
            playerScores.textContent = ++playerCounter;
        }
        else if (player === "rock") {
            result.textContent = "Coconut Ties Coconut! No Winner!";
        }
        else {
            result.textContent = "Coconut beats Crab! You Lose!";
            compScores.textContent = ++compCounter;
        }
    }
    else if (computerPlay === "scissors") {
        if (player === "paper") {
            result.textContent = "Crab beats Leaf! You Lose!";
            compScores.textContent = ++compCounter;
        }
        else if (player === "rock") {
            result.textContent = "Coconut beats Crab! You Win!";
            playerScores.textContent = ++playerCounter;
        }
        else {
            result.textContent = "Crab ties Crab! No Winner!";
        }
    }
    else {
        if (player === "scissors") {
            result.textContent = "Crab beats Leaf! You Win!";
            playerScores.textContent = ++playerCounter;
        }
        else if (player === "rock") {
            result.textContent = "Leaf beats Coconut! You Lose!";
            compScores.textContent = ++compCounter;
        }
        else {
            result.textContent = "Leaf ties Leaf! No Winner!";
        }
    }
    updateScore(compCounter, playerCounter);
}


