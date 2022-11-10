function getComputerChoice(){
    let num = Math.floor((Math.random() * 3));
    if (num == 0){
        return "Rock";
    }
    else if (num == 1){
        return "Paper";
    }
    return "Scissors";
}

let playerScore = 0;
let computerScore = 0;

function playRound(){
    if (playerScore >= 5 || computerScore >= 5){
        return;
    }

    let playerChoice = this.textContent;
    playerChoice = playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1).toLowerCase();
    let computerChoice = getComputerChoice();

    const resultsDiv = document.querySelector('.results');
    if (playerChoice == computerChoice){
        resultsDiv.innerText = "It's a tie!";
    }
    else if (playerChoice == "Rock" && computerChoice == "Scissors" ||
            playerChoice == "Scissors" && computerChoice == "Paper" ||
            playerChoice == "Paper" && computerChoice == "Rock"){
        playerScore++;
        const playerDiv = document.querySelector('.player');
        playerDiv.innerText = `Player\n ${playerScore}`;
        resultsDiv.innerText = playerScore == 5 ? 
        "YOU WON THE GAME YASSSSSS" : `Big L! ${playerChoice} beats ${computerChoice}`;
    }else{
        computerScore++;
        const computerDiv = document.querySelector('.computer');
        computerDiv.innerText = `Computer\n${computerScore}`;
        resultsDiv.innerText = computerScore == 5 ?
        "THE HUNK OF METAL BEAT YOU..." : `Computer W! ${computerChoice} beats ${playerChoice}`;
    }

    
}

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) => {
   button.addEventListener('click', playRound);
});