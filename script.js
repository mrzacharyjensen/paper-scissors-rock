/*const input = document.querySelector(".playerSelection");
const output = document.querySelector(".result");*/

// Get list of buttons that are part of the choices div
const buttons = document.getElementById("choices").querySelectorAll('button');

// Score counters
let playerScore = 0,
    computerScore = 0,
    drawScore = 0;

// Event listener for press of buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Play round of game
        let playerWin = playRound(button.id, getComputerChoice());
        if (playerWin[0] == "Win") playerScore++;
        let output = (playerWin[1] + "\n"
                    + " Player Score: " + playerScore.toString() 
                    + " Computer Score: " + computerScore.toString() 
                    + " Draw Score: " + drawScore.toString());
        document.querySelector(".result").textContent = output;
        console.log(output);
    });
});

function getComputerChoice() {
    // Generate random number between 0 and 2
    let randomInt = Math.floor(Math.random()*3);
    switch(randomInt) {
        case 0:
            return "paper";
        case 1:
            return "scissors";
        case 2:
            return "rock";
    };
};

function playRound(playerSelection, computerSelection) {
    let playerWin = "";
    switch(playerSelection) {
        case "paper":
            switch(computerSelection) {
                case "paper":
                    playerWin = "Draw";
                    break;
                case "scissors":
                    playerWin = "Lose";
                    break;
                case "rock":
                    playerWin = "Win";
            };
            break;
        case "scissors":
            switch(computerSelection) {
                case "paper":
                    playerWin = "Win";
                    break;
                case "scissors":
                    playerWin = "Draw";
                    break;
                case "rock":
                    playerWin = "Lose";
            };
            break;
        case "rock":
            switch(computerSelection) {
                case "paper":
                    playerWin = "Lose";
                    break;
                case "scissors":
                    playerWin = "Win";
                    break;
                case "rock":
                    playerWin = "Draw";
            };
    };
    switch(playerWin) {
        case "Win":
            return [playerWin, "You Win! " + playerSelection + " beats " + computerSelection];
        case "Lose":
            return [playerWin, "You Lose! " + computerSelection + " beats " + playerSelection];
        case "Draw":
            return [playerWin, "Draw! Both " + playerSelection];
    };
};

/*
input.addEventListener("change", () => {
    const playerSelection = input.value;
    const computerSelection = getComputerChoice();
    
    output.textContent = playRound(playerSelection, computerSelection);
});
*/ 