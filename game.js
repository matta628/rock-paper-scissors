function getComputerChoice(){
    //Should randomly return either rock paper or scissors
    let num = Math.floor((Math.random() * 3));
    if (num == 0){
        return "Rock";
    }
    else if (num == 1){
        return "Paper";
    }
    return "Scissors";
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1).toLowerCase();
    if (playerChoice == computerChoice){
        return "Tie Game!";
    }
    else if (playerChoice == "Rock" && computerChoice == "Scissors" ||
        playerChoice == "Scissors" && computerChoice == "Paper" ||
        playerChoice == "Paper" && computerChoice == "Rock"){
        return `You win! ${playerChoice} beats ${computerChoice}`;
    }
    return `You lose! ${computerChoice} beats ${playerChoice}`;
}