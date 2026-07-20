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
    let HumanChoice = prompt('Choose: Rock, Paper or Scissors', '');
    return HumanChoice
}

// Create and initialize with the value of 0 varible humanScore
let humanScore = 0;
// Create and initialize with the value of 0 varible computerScore
let computerScore = 0;

// Create function playRound with 2 parameters humanChoice and computerChoice
function playRound (humanChoice, computerChoice){
//     make parameter humanScore case-insensitive
    let humanChoiceInsensitive = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    console.log(humanChoiceInsensitive)
//     If human win then display corresponding message and increment variable humanScore
    if ((humanChoiceInsensitive==='Rock' && computerChoice==='Scissors') || 
        (humanChoiceInsensitive==='Paper' && computerChoice==='Rock') || 
        (humanChoiceInsensitive==='Scissors' && computerChoice==='Paper')){
        console.log(`You win! ${humanChoiceInsensitive} beats ${computerChoice}`);
        humanScore++;
    }
//     Else if computer win then display corresponding message and increment variable computerScore
    else if ((computerChoice === 'Rock' && humanChoiceInsensitive === 'Scissors') || 
             (computerChoice === 'Paper' && humanChoiceInsensitive === 'Rock') || 
             (computerChoice === 'Scissors' && humanChoiceInsensitive === 'Paper')) {
        console.log(`You lose! ${computerChoice} beats ${humanChoiceInsensitive}`);
        computerScore++;
    }
    // Tie condition
    else {
        console.log(`It's a tie! Both chose ${humanChoiceInsensitive}`);
    }
}



// Create function playGame
function playGame(){
//     call function playRound 5 times
    for (i=0; i<5; i++){
        console.log(`Round ${i+1}`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score: \nYou: ${humanScore}, Computer: ${computerScore}`)
    }

}

playGame();
