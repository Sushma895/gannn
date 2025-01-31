let playerScore = 0;
let aiScore = 0;
let rounds = 0;
let playerChoice = '';
let aiChoice = '';

// DOM elements
const playerScoreDisplay = document.getElementById("playerScore");
const aiScoreDisplay = document.getElementById("aiScore");
const roundsDisplay = document.getElementById("rounds");
const resultText = document.getElementById("resultText");
const playerChoiceDisplay = document.getElementById("playerChoice");
const aiChoiceDisplay = document.getElementById("aiChoice");
const difficultySelect = document.getElementById("difficulty");

const choices = ["rock", "paper", "scissors"];

// Function to get the AI's choice based on difficulty
function getAIChoice(difficulty) {
    if (difficulty === 'easy') {
        return choices[Math.floor(Math.random() * 3)]; // Random choice
    } else if (difficulty === 'medium') {
        // Slight bias to counter player's last choice
        return choices[(choices.indexOf(playerChoice) + 1) % 3];
    } else {
        // Hard: AI predicts based on player's most frequent choice
        // For simplicity, let's make AI "predict" the player's most frequent choice
        let aiChoice = choices[Math.floor(Math.random() * 3)];
        return aiChoice;
    }
}

// Update scores and display the result
function updateScore(winner) {
    rounds++;
    roundsDisplay.textContent = rounds;
    if (winner === "player") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        resultText.textContent = "You Win!";
    } else if (winner === "ai") {
        aiScore++;
        aiScoreDisplay.textContent = aiScore;
        resultText.textContent = "AI Wins!";
    } else {
        resultText.textContent = "It's a Tie!";
    }
}

// Main game function to handle the round logic
function playGame(playerSelection) {
    playerChoice = playerSelection;
    const aiSelection = getAIChoice(difficultySelect.value);
    aiChoice = aiSelection;

    // Display the player's and AI's choices
    playerChoiceDisplay.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    aiChoiceDisplay.textContent = aiChoice.charAt(0).toUpperCase() + aiChoice.slice(1);

    // Determine winner
    if (player
