console.log("Hello, from main.js")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Select your option: Rock, Paper, Scissors: ");
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    function playRound(humanChoice, computerChoice) {
        humanChoicePick = humanChoice.toLowerCase();
        computerChoicePick = computerChoice.toLowerCase();

        if (humanChoicePick === computerChoicePick) {
            console.log('Tie!');
        } else if (humanChoicePick === 'rock' && computerChoicePick === 'scissors' || humanChoicePick === 'paper' && computerChoicePick === 'rock' || humanChoicePick === 'scissors' && computerChoicePick === 'paper') {
            humanScore += 1;
            console.log(`You win! ${humanChoicePick} beats ${computerChoicePick}`);
        } else {
            computerScore += 1;
            console.log(`You lose! ${computerChoicePick} beats ${humanChoicePick}`);
        }
    }

    if (humanScore > computerScore) {
        return `You win! ${humanScore} to ${computerScore}`;
    } else if (computerScore > humanScore) {
        return `You lost! ${computerScore} to ${humanScore}`
    } else {
        return 'Tie!'
    }
    
}
playGame()