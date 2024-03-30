//Rock Papaer Scissors game

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector('#playerDisplay');
const computerDisplay = document.querySelector('#computerDisplay');
const resultDisplay = document.querySelector('#resultDisplay');
const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
const computerScoreDsiplay = document.querySelector('#computerScoreDisplay');
const clearScoreBtn = document.querySelector('#clearScoreBtn')
let playerScore = 0;
let computerScore = 0;

function playGame (playerChoices) {
//Generate a random number between 0 and 2 and store it in randomIndex
    const computerChoice= choices[Math.floor(Math.random() * 3)];
    // return choices[computerChoice];
    let result = "";

    if (playerChoices === computerChoice) {
        result = "IT´S A TIE!"
    } else if (playerChoices === "rock" && computerChoice === "scissors" ||
                playerChoices === "paper" && computerChoice === "rock" ||
                playerChoices === "scissors" && computerChoice === "paper") {
        result = "YOU WIN!";
    } else {
        result = "YOU LOSE!";
    }

    playerDisplay.textContent = `Player: ${playerChoices}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    // switch(result) {
    //     case "YOU WIN!":
    //         resultDisplay.classList.add('greenText');
    //         break;
    //     case "YOU LOSE!":
    //         resultDisplay.classList.add('redText');
    //         break;
    // }
    if (result === "YOU WIN!") {
        resultDisplay.classList.add('greenText');
        playerScore ++;
        playerScoreDisplay.textContent = playerScore;
    } else if (result === "YOU LOSE!") {
        resultDisplay.classList.add('redText');
        computerScore ++;
        computerScoreDsiplay.textContent = computerScore;
    }
    
    if (playerScore === 5 && computerScore < 5) {
        result = "YOU WIN THE MATCH!";
        resultDisplay.classList.add('greenText');
        resultDisplay.textContent = result;
    } else if (computerScore === 5 && playerScore < 5) {
        result = "YOU LOSE THE MATCH";
        resultDisplay.classList.add('redText');
        resultDisplay.textContent = result;
    }

}
    clearScoreBtn.addEventListener("click", () => {
        playerScore = 0;
        playerScoreDisplay.textContent = playerScore;
        computerScore = 0;
        computerScoreDsiplay.textContent = computerScore;
        
        resultDisplay.textContent = "";
    })