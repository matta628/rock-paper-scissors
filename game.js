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
        return "It's a tie!";
    }
    else if (playerChoice == "Rock" && computerChoice == "Scissors" ||
        playerChoice == "Scissors" && computerChoice == "Paper" ||
        playerChoice == "Paper" && computerChoice == "Rock"){
        return `You won! ${playerChoice} beats ${computerChoice}`;
    }
    return `Computer wins! ${computerChoice} beats ${playerChoice}`;
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let roundResult = playRound(button.textContent,getComputerChoice());
        const divResults = document.querySelector('.results');
        divResults.textContent = roundResult;
        if (roundResult.charAt(0) == "Y") playerScore++;
        if (roundResult.charAt(0) == "C") computerScore++;
        const playerDiv = document.querySelector('.player');
        playerDiv.textContent = `Player: ${playerScore}`;
        const computerDiv = document.querySelector('.computer');
        computerDiv.textContent = `Computer: ${computerScore}`;
    });
});

function game(){
    for (let i = 0; i < 5; i++){
        playerChoice = prompt("Choose rock paper or scissors!","").trim();
        let result = playRound(playerChoice, getComputerChoice());
        console.log(result);
        if (result.charAt(0) == "Y") playerScore++;
        if (result.charAt(0) == "C") computerScore++;
        console.log(`\tPlayer: ${playerScore}\tComputer: ${computerScore}`);
    }
    if (playerScore == computerScore){
        console.log("No one won this game. But no won lost either!")
    }
    else if (playerScore > computerScore){
        console.log("You beat the computer yasssss")
    }
    else{
        console.log("Nice one. Got beat by a hunk of metal...")
    }
}