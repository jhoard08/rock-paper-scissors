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
    let winner = gameResults(comp, player);
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
     if(comp === 5 || player === 5){
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
    if(randomPick === 1){
        computerPick = "rock";
    }
    else if(randomPick === 2){
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
    if(computerPlay === "rock"){
        if(player === "paper"){
           result.textContent = "Paper beats Rock! You Win!";
           playerScores.textContent = ++playerCounter;
        }
        else if(player === "rock"){
            result.textContent = "Rock Ties Rock! No Winner!";
        } 
        else{
             result.textContent = "Rock beats Scissors! You Lose!";
             compScores.textContent = ++compCounter;
        }
    }
    else if(computerPlay === "scissors") {
        if(player === "paper"){
             result.textContent = "Scissors beats Paper! You Lose!";
             compScores.textContent = ++compCounter;
        }
        else if(player === "rock"){
             result.textContent = "Rock beats Scissors! You Win!";
             playerScores.textContent = ++playerCounter;
        }
        else{
             result.textContent = "Scissors ties Scissors! No Winner!";
        }
    }
    else{
        if(player === "scissors"){
             result.textContent = "Scissors beats Paper! You Win!";
             playerScores.textContent = ++playerCounter;
        }
        else if(player === "rock"){
             result.textContent = "Paper beats Rock! You Lose!";
             compScores.textContent = ++compCounter;
        }
        else{
             result.textContent = "Paper ties Paper! No Winner!";
        }
    }
    updateScore(compCounter, playerCounter);
}


