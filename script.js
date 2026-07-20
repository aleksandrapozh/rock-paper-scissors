console.log('Hello World');

// Create function getComputerChoice
function getComputerChoice(){
//     Generate randomNumber between 0 and 1 using Math.random
    let randomNumber = Math.random();
//     If randomNumber < 0.33 then return rock
    if (randomNumber < 0.33){
        return 'Rock'
    }
//     Else if randomNumber < 0.66 then return paper
    else if (randomNumber < 0.66){
        return 'Paper'
    }
//     Else randomNumber < 1 then return scissors
    else{
        return 'Scissors'
    }
}

console.log(getComputerChoice())

// Create function getHumanChoice
function getHumanChoice(){
//     Use prompt to receive human choice
    return prompt('Choose: Rock, Paper or Scissors', '')
}
 

// Create and initialize with the value of 0 varible humanScore
// Create and initialize with the value of 0 varible computerScore

// Create function playRound with 2 parameters humanScore and computerScore
//     make parameter humanScore case-insensitive
//     If human win then display corresponding message and increment variable humanScore
//     Else if computer win then display corresponding message and increment variable computerScore

// Create function playGame
//     call function playRound 5 times
