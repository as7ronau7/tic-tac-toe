console.log("Hello, from main.js")

let humanScore = 0;
let computerScore = 0;

const option = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return option[Math.floor(Math.random() * option.length)];
}

function getHumanChoice() {
    prompt("Please select your choice: ")
}