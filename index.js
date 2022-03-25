const computerPlay = () => {
    let computerPick = " ";
    const randomPick = Math.floor((Math.random() * 3) + 1);
    if(randomPick === 1){
        computerPick = "Rock";
    }
    else if(randomPick === 2){
        computerPick = "Scissors";
    }
    else {
        computerPick = "Paper";
    }
    return computerPick;
}

const playerSelection = () => {
    const playerChoice = prompt("Please choose either Rock, Paper, or Scissors.");
    return playerChoice;
}

const gameResults = (computerPlay, playerSelection) => {
    let winner = " ";
    if(computerPlay.toLowerCase() === "rock"){
        if(playerSelection.toLowerCase() === "paper"){
            winner = "Paper beats Rock! You Win!";
        }
        else if(playerSelection.toLowerCase() === "rock"){
            winner = "Rock Ties Rock! No Winner!";
        }
        else{
            winner = "Rock beats Scissors! You Lose!";
        }
    }
    else if(computerPlay.toLowerCase() === "scissors") {
        if(playerSelection.toLowerCase() === "paper"){
            winner = "Scissors beats Paper! You Lose!";
        }
        else if(playerSelection.toLowerCase() === "rock"){
            winner = "Rock beats Scissors! You Win!";
        }
        else{
            winner = "Scissors ties Scissors! No Winner!";
        }
    }
    else{
        if(playerSelection.toLowerCase() === "scissors"){
            winner = "Scissors beats Paper! You Win!";
        }
        else if(playerSelection.toLowerCase() === "rock"){
            winner = "Paper beats Rock! You Lose!";
        }
        else{
            winner = "Paper ties Paper! No Winner!";
        }
    }
    return winner;
}



while(true){
    const comp = computerPlay();
    const player = playerSelection();
    console.log(gameResults(comp,player));
}
