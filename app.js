// Import compareNumbers function
import compareNumbers from './test/compareNumbers.js';

// Get needed elements from the DOM
const formBox = document.getElementById('form');

const guessInput = document.getElementById('guess-input');

const submitButton = document.getElementById('submit');

const statusBox = document.getElementById('status');

const resultsBox = document.getElementById('results');

const turnsLeft = document.getElementById('turns-left');

const highOrLow = document.getElementById('high-low');

const winOrLose = document.getElementById('win-lose');

// Set nitial state
let turns = 4;

const correctNumber = (Math.round(Math.random() * 10));

// Add event listener for button click
submitButton.addEventListener('click', () => {

    // Turn the input string into a number
    const guessStr = guessInput.value;
    const guess = parseInt(guessStr);

    // Run compareNumbers function and update visibility of display elements accordingly
    if (compareNumbers(guess, correctNumber) === 0) {
        formBox.style.display = 'none';
        statusBox.style.display = 'none';
        resultsBox.style.display = 'block';
        winOrLose.textContent = `You win! The number was ${correctNumber}.`;
    } else if (compareNumbers(guess, correctNumber) === -1) {
        turns --;
        statusBox.style.display = 'block';
        turnsLeft.textContent = `${turns}`;
        highOrLow.textContent = 'low';
    } else if (compareNumbers(guess, correctNumber) === 1) {
        turns --;
        statusBox.style.display = 'block';
        turnsLeft.textContent = `${turns}`;
        highOrLow.textContent = 'high';
    }

    // Hide form when no turns left
    if (turns === 0) {
        formBox.style.display = 'none';
        statusBox.style.display = 'none';
        resultsBox.style.display = 'block';
        winOrLose.textContent = `You lose! The number was ${correctNumber}.`;
    }
});