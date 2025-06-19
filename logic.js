
function getComputerChoice(){

    let values = ["rock","paper","scissor"]

    let rand = values[Math.floor(values.length * Math.random())]



 console.log(rand)
 return rand

}








function getHumanChoice(){

    let input = window.prompt("Paper, Rock, Scissor?");


    let input_ = input.toLowerCase()

    console.log(input_)
    return input_

}






function playRound(){


    let humanScore = 0

    let computerScore = 0


        
    if (humanSelection === "paper"&& computerSelection === "rock") {
        console.log("Human Wins")
        humanScore++;
    } else if (humanSelection === "paper"&& computerSelection === "paper") {
        console.log("Remis");
    } else if (humanSelection === "paper"&& computerSelection === "scissor") {
        console.log("Computer Wins")
        computerScore++;

     } else if (humanSelection === "scissor"&& computerSelection === "scissor") {
        console.log("Remis");
    } else if (humanSelection === "scissor"&& computerSelection === "rock") {
        console.log("Computer Wins")
        computerScore++;
            } else if (humanSelection === "scissor"&& computerSelection === "paper") {
        console.log("Human Wins")
         humanScore++;
     } else if (humanSelection === "rock"&& computerSelection === "rock") {
        console.log("Remis");
    } else if (humanSelection === "rock"&& computerSelection === "paper") {
        console.log("Computer Wins")
        computerScore++;
    } else if (humanSelection === "rock"&& computerSelection === "scissor") {
        console.log("Human Wins")
        humanScore++;




  
    }
    

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);