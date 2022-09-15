let computerSelection;
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
            return result = `You lose, ${playerSelection} beats ${computerSelection}`;
        case playerSelection === "Paper" && computerSelection === "Scissors":
            return result = `You lose, ${playerSelection} beats ${computerSelection}`;
        case playerSelection === "Scissors" && computerSelection === "Rock":
            return result = `You lose, ${playerSelection} beats ${computerSelection}`;
        //Win
        case playerSelection === "Rock" && computerSelection === "Scissors":
            return result = `You win! ${playerSelection} beats ${computerSelection}`;
        case playerSelection === "Paper" && computerSelection === "Rock":
            return result = `You win! ${playerSelection} beats ${computerSelection}`;
        case playerSelection === "Scissors" && computerSelection === "Paper":
            return result = `You win! ${playerSelection} beats ${computerSelection}`;

    }
  }

  let playerSelection = prompt("Lets play Rock Paper Scissors! Choose one of the three")
  computerSelection = getComputerSelection();
  alert(playRound(playerSelection, computerSelection));