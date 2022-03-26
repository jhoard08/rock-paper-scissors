const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.results');
const scores = document.querySelector('.score');

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
    let winner = 0;
    if(computerPlay === "rock"){
        if(player === "paper"){
           result.textContent = "Paper beats Rock! You Win!";
           winner++;

        }
        else if(player === "rock"){
            result.textContent = "Rock Ties Rock! No Winner!";
        } 
        else{
             result.textContent = "Rock beats Scissors! You Lose!";
        }
    }
    else if(computerPlay === "scissors") {
        if(player === "paper"){
             result.textContent = "Scissors beats Paper! You Lose!";
        }
        else if(player === "rock"){
             result.textContent = "Rock beats Scissors! You Win!";
             winner++;
        }
        else{
             result.textContent = "Scissors ties Scissors! No Winner!";
        }
    }
    else{
        if(player === "scissors"){
             result.textContent = "Scissors beats Paper! You Win!";
             winner++;
        }
        else if(player === "rock"){
             result.textContent = "Paper beats Rock! You Lose!";
        }
        else{
             result.textContent = "Paper ties Paper! No Winner!";
        }
    }
    return winner;
}

const score = num => {
    if(num > 0){
        score.textContent = 1;
    }
}


