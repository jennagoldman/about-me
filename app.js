
// Import isYes function
import isYes from '/src/is-yes.js';

// Reference needed DOM elements:
// The button the user will click for taking the quiz
const quizButton = document.getElementById('quiz-button');

// The element to which you will write the quiz results
const results = document.getElementById('results');


// Subscribe to the button's click event using addEventListener
quizButton.addEventListener('click', () => {
    // Ask the user's name. Their name should be used in subsequent prompts
    const name = prompt('What is your name?');
    // Confirm that the user really wants to take the quiz. If not, `return` from your function.
    const confirmation = confirm(`Are you sure you want to take the quiz, ${name}?`);
    if (confirmation === false) return;

    // Three YES/NO questions about you. Use your `isYes` function to determine the user's response, then compare to the correct answer. Track number of correct responses.
    const answerOne = prompt('Is my name Jenna?');
    const answerTwo = prompt('Have I ever lived in Boston?');
    const answerThree = prompt('Do I like chocolate?');

    let score = 0;
    if (isYes(answerOne)) score += 1;
    if (isYes(answerTwo)) score += 1;
    if (isYes(answerThree)) score += 1;

    console.log(score);
});



// 1. Alert the user that the quiz is complete and their results will now be written to the webpage.


// 1. Write a response to the page with their name and number correct, for example: "Okay Bernice, you got 2/3 correct".


// 1. STRETCH goal(s):
//   - Add a class to style the result differently based on
//   good or bad score
//   - Include a percentage, without decimal places.