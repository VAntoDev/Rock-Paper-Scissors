let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let prevPlayerScore = 0;
let prevComputerScore = 0;
let win = true;
const choices = [ "ROCK" , "PAPER", "SCISSORS"]

//getComputerSelection gets the cpu's choice for the game
function getComputerSelection(){
    computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
}

function capitalize(string){
    return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}

//playRound plays a round of the game
function playRound(playerSelection, computerSelection) {
    //playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    switch (true) {       
        //Tie
        case playerSelection === computerSelection:
            return result = `Its a tie! ${playerSelection} and ${computerSelection} are the same`;
        //Lose
        case playerSelection === "Rock" && computerSelection === "Paper":
            computerScore++;
            return result = `You lose, ${computerSelection} beats your ${playerSelection}`;
        case playerSelection === "Paper" && computerSelection === "Scissors":
            computerScore++;
            return result = `You lose, ${computerSelection} beats your ${playerSelection}`;
        case playerSelection === "Scissors" && computerSelection === "Rock":
            computerScore++;
            return result = `You lose, ${computerSelection} beats your ${playerSelection}`;
        //Win
        case playerSelection === "Rock" && computerSelection === "Scissors":
            playerScore++;
            return result = `You win! ${playerSelection} beats ${computerSelection}`;
        case playerSelection === "Paper" && computerSelection === "Rock":
            playerScore++;
            return result = `You win! ${playerSelection} beats ${computerSelection}`;
        case playerSelection === "Scissors" && computerSelection === "Paper":
            playerScore++;
            return result = `You win! ${playerSelection} beats ${computerSelection}`;
        //Not valid input
        default:
            return result = "That's not a valid choice, retry";
            
    }
  }

  function gameRestart(){
      playerScore = 0;
      prevPlayerScore = 0
      computerScore = 0;
      prevComputerScore = 0;
  }

  //game() lets the game repeat up to n times
  function game(){
        

            //playerSelection = prompt("Lets play Rock Paper Scissors! Choose one of the three")
            computerSelection = getComputerSelection();
            gameExecution.textContent =(playRound(playerSelection, computerSelection));

            if (computerScore != prevComputerScore || playerScore != prevPlayerScore){
                prevComputerScore = computerScore;
                prevPlayerScore = playerScore;
                
            } 
            
            //This part of the code makes the animations work
            resultsContainer.removeChild(resultsP);
            resultsContainer.insertBefore(resultsP, buttonContainer);
            resultsContainer.removeChild(gameExecution);
            resultsContainer.insertBefore(gameExecution, gameRestartP);
            resultsContainer.removeChild(gameRestartP);
            resultsContainer.appendChild(gameRestartP)

            resultsP.textContent = (`Your score is ${playerScore} and your opponent's score is ${computerScore}`);
            

            if (computerScore === 3) {
                resultsP.textContent =(`Cpu won! ${playerScore} - ${computerScore}`);
                gameRestartP.textContent =("Restarting the game, both scores down to 0");
                gameRestart()
            } else if (playerScore === 3){
                resultsP.textContent =(`You won! ${playerScore} - ${computerScore}`);
                gameRestartP.textContent =("Restarting the game, both scores down to 0");
                gameRestart()
            }
        
      }

function stopButtonClick() {
    rockSelection.disabled = true;
    scissorsSelection.disabled = true;
    paperSelection.disabled = true;
    setTimeout(()=>{
    rockSelection.disabled = false;
    scissorsSelection.disabled = false;
    paperSelection.disabled = false;
    console.log('Button Activated')}, 500)
}

const rockSelection = document.querySelector('#rock')
const paperSelection = document.querySelector('#paper')
const scissorsSelection = document.querySelector('#scissors')
const resultsP = document.querySelector('#results')
const gameRestartP = document.querySelector('#game-restart')
const gameExecution = document.querySelector('#game-execution')
const resultsContainer = document.querySelector('#results-container')
const buttonContainer = document.querySelector('#button-container')

resultsP.textContent = "Lets play Rock Paper Scissors! Choose one of them to start."

rockSelection.addEventListener('click', function (e){
    gameRestartP.textContent =("")
    playerSelection = "Rock";
    game();
    stopButtonClick();
    
})

paperSelection.addEventListener('click', function (e){
    gameRestartP.textContent =("")
    playerSelection = "Paper";
    game();
    stopButtonClick();
})

scissorsSelection.addEventListener('click', function (e){
    gameRestartP.textContent =("")
    playerSelection = "Scissors";
    game();
    stopButtonClick();
})


//game();
