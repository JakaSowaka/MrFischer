let playerHealth = 10;
let fischerHealth = 10;

// Selecting elements from the DOM
const playerHealthBar = document.querySelector('.player-health');
const fischerHealthBar = document.querySelector('.fischer-health');
const answerInput = document.querySelector('.answer-input');
const questionText = document.querySelector('.question-box p');

// Question and answers data
const questions = [
    { question: 'Como se fala "azul" em inglês?', answer: 'blue' },
    { question: 'Como se fala "vermelho" em inglês?', answer: 'red' }
];

let currentQuestion = 0;

// Function to update health bars
function updateHealth() {
    playerHealthBar.style.width = `${(playerHealth / 10) * 100}%`;
    fischerHealthBar.style.width = `${(fischerHealth / 10) * 100}%`;
}

// Display next question
function loadQuestion() {
    questionText.innerHTML = questions[currentQuestion].question;
}

// Check if the answer is correct
answerInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const userAnswer = answerInput.value.trim().toLowerCase();
        if (userAnswer === questions[currentQuestion].answer) {
            fischerHealth--;
        } else {
            playerHealth--;
        }
        updateHealth();
        answerInput.value = '';
        currentQuestion = (currentQuestion + 1) % questions.length;
        loadQuestion();
    }

    if (playerHealth === 0 || fischerHealth === 0) {
        alert(playerHealth === 0 ? 'You lost!' : 'You won!');
        // Reset health
        playerHealth = 10;
        fischerHealth = 10;
        updateHealth();
        currentQuestion = 0;
        loadQuestion();
    }
});

// Initialize game
loadQuestion();
updateHealth();
