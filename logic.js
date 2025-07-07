
let humanScore = 0;
let computerScore = 0;

const resultDiv = document.createElement("div");
const scoreDiv = document.createElement("div");
const winnerDiv = document.createElement("div");

document.body.appendChild(resultDiv);
document.body.appendChild(scoreDiv);
document.body.appendChild(winnerDiv);

function getComputerChoice(){

    let values = ["rock","paper","scissors"]

    let rand = values[Math.floor(values.length * Math.random())]



 //console.log(`Computer: ${rand}`)
 return rand

}




function getHumanChoice(){

    let input = window.prompt("Paper, Rock, Scissor?");


    let input_ = input.toLowerCase()

    console.log(`Human: ${input_}`)
    return input_

}






function playRound(humanSelection, computerSelection){
        
    if (humanSelection === "paper"&& computerSelection === "rock") {
        console.log("Human Wins");
        return "human";
    } else if (humanSelection === "paper"&& computerSelection === "paper") {
        console.log("Draw");
        return "draw";
    } else if (humanSelection === "paper"&& computerSelection === "scissors") {
        console.log("Computer Wins");
        return "computer";
    } else if (humanSelection === "scissors"&& computerSelection === "scissors") {
        console.log("Draw");
        return "draw";
    } else if (humanSelection === "scissors"&& computerSelection === "rock") {
        console.log("Computer Wins");
        return "computer";
    } else if (humanSelection === "scissors"&& computerSelection === "paper") {
        console.log("Human Wins");
        return "human";
    } else if (humanSelection === "rock"&& computerSelection === "rock") {
        console.log("Draw");
        return "draw";
    } else if (humanSelection === "rock"&& computerSelection === "paper") {
        result = console.log("Computer Wins")
        return "computer";
    } else if (humanSelection === "rock"&& computerSelection === "scissors") {
        console.log("Human Wins")
        return "human";

    } 

}



function handleClick(playerSelection) {
    if (humanScore >= 5 || computerScore >= 5) return;

    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result === "human") {
        humanScore++;
    } else if (result === "computer") {
        computerScore++;
    }

    scoreDiv.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            winnerDiv.textContent = "You win the game!";
        } else {
            winnerDiv.textContent = "Computer wins the game!";
        }
    }
}
