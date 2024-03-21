//Rock Papaer Scissors game

//Generating Computer´s choice:
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    //Generate a random number between 0 and 2 and store it in randomIndex
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
//Playing a single round:
function playRound(playerSelection, computerSelection) {
    //Make selection case-insensitive
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It´s a TIE!";
    }else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}
//Playing a five round game and showing the score:
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    // Loop that start a five round and shows the current result:
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Make your choice and lets play! (rock, paper or scissors)");
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult.includes("Win")) {
            playerScore++;
        } else if (roundResult.includes("Lose")) {
            computerScore++;
        } else {
            tieScore++;
        }
    }
    //Checking who´s won:
    if (playerScore > computerScore) {
        console.log("You win the GAME! 😃")
    }else if (playerScore < computerScore) {
        console.log("You lose the GAME! 😔")
    } else {
        console.log("It´s a TIE!")
    }
    console.log(`Computer Score: ${computerScore}`)
    console.log(`Player score: ${playerScore}`)
    console.log(`Ties: ${tieScore}`)
}

playGame();










