
function getComputerChoice(){

    let values = ["rock","paper","scissor"]

    let rand = values[Math.floor(values.length * Math.random())]



 console.log(`Computer: ${rand}`)
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

function game(){



    let humanScore = 0

    let computerScore = 0

    //limit to 5 for i
    for (let i=0; i<5; i++) {
        console.log(`\nRound ${i + 1}`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        const result = playRound(humanSelection,computerSelection)

        if (result === "human"){

           humanScore++; 
        }
        
        else if 

            (result === "computer"){

                computerScore++
            
        }
        
    }

    console.log(`\nFinal Score:\nHuman: ${humanScore}\nComputer: ${computerScore}`);

}









game();