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


// Create and initialize with the value of 0 varible humanScore
let humanScore = 0;
// Create and initialize with the value of 0 varible computerScore
let computerScore = 0;

let roundCounter = 0;


// Create function playRound with 2 parameters humanChoice and computerChoice
function playRound (humanChoice, computerChoice){
//     If human win then display corresponding message and increment variable humanScore
    if ((humanChoice==='Rock' && computerChoice==='Scissors') || 
        (humanChoice==='Paper' && computerChoice==='Rock') || 
        (humanChoice==='Scissors' && computerChoice==='Paper')){
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        
    }
//     Else if computer win then display corresponding message and increment variable computerScore
    else if ((computerChoice === 'Rock' && humanChoice === 'Scissors') || 
             (computerChoice === 'Paper' && humanChoice  === 'Rock') || 
             (computerChoice === 'Scissors' && humanChoice === 'Paper')) {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    // Tie condition
    else {
        result.textContent = `It's a tie! Both chose ${humanChoice}`;
    }

    score.textContent = `Score: You: ${humanScore} | Computer: ${computerScore}`;
    
    if (humanScore === 5 || computerScore === 5){
        if (humanScore === 5){
            winner.textContent='You win!';
            winner.style.color = 'green';
        }
        else{
            winner.textContent = 'You lose!';
            winner.style.color = 'red';
        }

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }

}



const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")

rockBtn.addEventListener('click', () =>
    playRound('Rock', getComputerChoice())
)

paperBtn.addEventListener('click', () =>
    playRound('Paper', getComputerChoice())
)

scissorsBtn.addEventListener('click', () =>
    playRound('Scissors', getComputerChoice())
)

const result = document.querySelector('#result');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner')

