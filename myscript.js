console.log("Hi!")

//Crea una funzione che da il risultato random del computer: ti servono i risultati che il computer può avere, una randomizzatore e una variabile in 
//cui mettere il risultato

let computerChoice = "";
const choices = [ "ROCK" , "PAPER", "SCISSORS"]

function getComputerChoice(){
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    alert(computerChoice)
    return computerChoice;
}



console.log(getComputerChoice())