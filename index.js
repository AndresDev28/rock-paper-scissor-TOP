//Rock Papaer Scissors game

// Options declarations
const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice(options) {
    //Generate random number
    const randomInex = Math.floor(Math.random() * options.length);

    const election = options[randomInex];
    console.log(`Computer´s choice: ${election}`);
    return election;
}

//Llamado de funcion y almaceno su valor en variable

const computerChoice = getComputerChoice(options);

console.log(`La computadora elige: ${computerChoice}`);

