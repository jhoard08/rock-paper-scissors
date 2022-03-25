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
    let winner = 0;
    if(computerPlay.toLowerCase() === "rock"){
        if(playerSelection.toLowerCase() === "paper"){
           console.log("Paper beats Rock! You Win!");
           winner++;

        }
        else if(playerSelection.toLowerCase() === "rock"){
            console.log("Rock Ties Rock! No Winner!");
        } 
        else{
             console.log("Rock beats Scissors! You Lose!");
        }
    }
    else if(computerPlay.toLowerCase() === "scissors") {
        if(playerSelection.toLowerCase() === "paper"){
             console.log("Scissors beats Paper! You Lose!");
        }
        else if(playerSelection.toLowerCase() === "rock"){
             console.log("Rock beats Scissors! You Win!");
             winner++;
        }
        else{
             console.log("Scissors ties Scissors! No Winner!");
        }
    }
    else{
        if(playerSelection.toLowerCase() === "scissors"){
             console.log("Scissors beats Paper! You Win!");
             winner++;
        }
        else if(playerSelection.toLowerCase() === "rock"){
             console.log("Paper beats Rock! You Lose!");
        }
        else{
             console.log("Paper ties Paper! No Winner!");
        }
    }
    return winner;
}

const game = () => {
    let compWin = 0;
    let playerWin = 0;
    for(let i = 0; i < 5; i++){
        const player = playerSelection();
        const comp = computerPlay();
        if(gameResults(comp,player) === 0){
            compWin++;
        }
        else {
            playerWin++;
        }
    }
    console.log(playerWin > compWin ? "Player Wins" : "Computer Wins");
}


game();
