/*const input = document.querySelector(".playerSelection");
const output = document.querySelector(".result");*/

// Get list of buttons that are part of the choices div
const buttons = document.getElementById("choices").querySelectorAll('button');

// Event listener for press of buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Play round of game
        let output = playRound(button.id, getComputerChoice());
        output.textContent = output;
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
            return "You Win! " + playerSelection + " beats " + computerSelection;
        case "Lose":
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        case "Draw":
            return "Draw! Both " + playerSelection;
    };
};

/*
input.addEventListener("change", () => {
    const playerSelection = input.value;
    const computerSelection = getComputerChoice();
    
    output.textContent = playRound(playerSelection, computerSelection);
});
*/ 