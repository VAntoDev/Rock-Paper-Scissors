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
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    switch (true) {       
        //Tie
        case playerSelection === computerSelection:
            return result = `Its a tie! ${playerSelection} and ${computerSelection} are the same`;
        //Lose
        case playerSelection === "Rock" && computerSelection === "Paper":
            computerScore++;
            return result = `You lose, ${playerSelection} beats ${computerSelection}`;
        case playerSelection === "Paper" && computerSelection === "Scissors":
            computerScore++;
            return result = `You lose, ${playerSelection} beats ${computerSelection}`;
        case playerSelection === "Scissors" && computerSelection === "Rock":
            computerScore++;
            return result = `You lose, ${playerSelection} beats ${computerSelection}`;
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

  //game() lets the game repeat up to 5 times
  function game(){

        //this while is necessary for the game to run smoothly even if there's a tie
        while(win){

            playerSelection = prompt("Lets play Rock Paper Scissors! Choose one of the three")
            computerSelection = getComputerSelection();
            alert(playRound(playerSelection, computerSelection));

            if (computerScore != prevComputerScore || playerScore != prevPlayerScore){
                prevComputerScore = computerScore;
                prevPlayerScore = playerScore;
                
            } 
            
            alert(`Your score is ${playerScore} and your opponent's score is ${computerScore}`)

            if (computerScore === 5) {
                alert(`Cpu won! ${playerScore} - ${computerScore} `)
                win = false;
            } else if (playerScore === 5){
                alert(`You won! ${playerScore} - ${computerScore} `)
                win = false;
            }

            
        }

        
        
      }

game();
