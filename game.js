//Nia Manning
//Guided Inquiry: JavaScript
//7-20-2025
const userPick = ['Rock', 'Paper', 'Scissors']
const playerDisplay = document.getElementById("playerDisplay"); //player display
const cpuDisplay = document.getElementById("cpuDisplay"); //cpu display
const resultDisplay = document.getElementById("resultDisplay"); //result display
const playerScore =  document.getElementById("playerScore");  //player score display
const cpuScore = document.getElementById("cpuScore"); //cpu score display
const tieScore = document.getElementById("tieScore"); //tied games
let pScore = 0;
let cScore = 0;
let tScore = 0;

function play(playerPick){
    const cpuPick = userPick[Math.floor(Math.random() * 3)]; //0 = rock, 1 = paper, 3 = scissors
    let result = " ";
    console.log(cpuPick); //to ensure that the computer is choosing between rock, paper, scissors

    //if statement for each option
    if(playerPick === cpuPick){
        result = "IT'S A TIE!!";
    } else{ 
        //used for readability, good for multiple uses
        switch(playerPick){ //If the player choose rock, and the cpu chooses scissors. winning condiiton first.
            case "Rock":
                result = (cpuPick === "Scissors") ? "YOU WIN!!" : "COMPUTER WINS!!";
                break;
             case "Paper": //If the player choose paper, and the cpu chooses rock. winning condiiton first.
                result = (cpuPick === "Rock") ? "YOU WIN!!" : "COMPUTER WINS!!";
                break;
            case "Scissors": //If the player choose scissors, and the cpu chooses paper. winning condiiton first.
                result = (cpuPick === "Paper") ? "YOU WIN!!" : "COMPUTER WINS!!";
                break;
        }
    }

    playerDisplay.textContent = `You: ${playerPick}`;
    cpuDisplay.textContent = `CPU: ${cpuPick}`;
    resultDisplay.textContent = result;

    //Score Counter
    switch(result){
        case "YOU WIN!!":
            pScore++;
            playerScore.textContent = pScore;
            break;
        case "COMPUTER WINS!!":
            cScore++;
            cpuScore.textContent = cScore;
            break;
        case "IT'S A TIE!!":
            tScore++;
            tieScore.textContent = tScore;
            break;
    }
}

//Attempt 3 @ reset button
document.getElementById("reset-btn").addEventListener("click", function() {
    document.getElementById("playerScore").textContent = 0;
    document.getElementById("cpuScore").textContent = 0;
    document.getElementById("tieScore").textContent = 0;
    document.getElementById("resultDisplay").textContent = " ";
});