const input = document.querySelector(".playerSelection");
const output = document.querySelector(".result");

function getComputerChoice() {
    // Generate random number between 0 and 2
    let randomInt = Math.floor(Math.random()*3);
    switch(randomInt) {
        case 0:
            return "Paper";
        case 1:
            return "Scissors";
        case 2:
            return "Rock";
    };
};

function playRound(playerSelection, computerSelection) {
    let playerWin = "";
    switch(playerSelection) {
        case "Paper":
            switch(computerSelection) {
                case "Paper":
                    playerWin = "Draw";
                    break;
                case "Scissors":
                    playerWin = "Lose";
                    break;
                case "Rock":
                    playerWin = "Win";
            };
            break;
        case "Scissors":
            switch(computerSelection) {
                case "Paper":
                    playerWin = "Win";
                    break;
                case "Scissors":
                    playerWin = "Draw";
                    break;
                case "Rock":
                    playerWin = "Lose";
            };
            break;
        case "Rock":
            switch(computerSelection) {
                case "Paper":
                    playerWin = "Lose";
                    break;
                case "Scissors":
                    playerWin = "Win";
                    break;
                case "Rock":
                    playerWin = "Draw";
                    console.log("2Rock");
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

input.addEventListener("change", () => {
    const playerSelection = input.value;
    const computerSelection = getComputerChoice();
    
    //const computerSelection = 
    output.textContent = computerSelection +  playRound(playerSelection, computerSelection);
});