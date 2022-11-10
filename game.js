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

function updatePlayerScore(playerScore){
    const playerDiv = document.querySelector('.player');
    playerDiv.innerText = `Player\n ${playerScore}`;
}
function updateComputerScore(computerScore){
    const computerDiv = document.querySelector('.computer');
    computerDiv.innerText = `Computer\n${computerScore}`;
}
function updateResults(results){
    const resultsDiv = document.querySelector('.results');
    resultsDiv.innerText = results;
}

function playRound(){
    if (playerScore >= 5 || computerScore >= 5){
        return;
    }

    let playerChoice = this.textContent;
    playerChoice = playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1).toLowerCase();
    let computerChoice = getComputerChoice();

    let results = "Results";
    if (playerChoice == computerChoice){
        results = "It's a tie!";
    }
    else if (playerChoice == "Rock" && computerChoice == "Scissors" ||
            playerChoice == "Scissors" && computerChoice == "Paper" ||
            playerChoice == "Paper" && computerChoice == "Rock"){
        updatePlayerScore(++playerScore);
        results = playerScore == 5 ? 
        "YOU WON THE GAME YASSSSSS" : `Big L! ${playerChoice} beats ${computerChoice}`;
    }else{
        updateComputerScore(++computerScore);
        results = computerScore == 5 ?
        "THE HUNK OF METAL BEAT YOU..." : `Computer W! ${computerChoice} beats ${playerChoice}`;
    }

    updateResults(results);
}

const buttons = document.querySelectorAll('.choices button');
buttons.forEach((button) => {
   button.addEventListener('click', playRound);
});

const resetButton = document.querySelector('.reset button');
resetButton.addEventListener('click', () => {
    updatePlayerScore(playerScore = 0);
    updateComputerScore(computerScore = 0);
    updateResults("Result");
});