// Select the new quote button using a querySelector. Assign it to a new variable.
const newQuote = document.querySelector('#js-new-quote');

// Write an event listener to check if the button is clicked. When the button is clicked, run a function called "getQuote".

newQuote.addEventListener('click', getTrivia);

const getAnswerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer)

// Write the function declaration, and check the button click works by returning a message in the console everytime the button is clicked.


// Add a new variable that holds the API endpoint: 

// https://trivia.cyberwisp.com/getrandomchristmasquestion

// Change the getQuote function to use the fetch method to get a random quote from that endpoint.

// If successful, output the quote to the console

// If it fails, output an error message to the console AND via alert

// Write a second function called "displayQuote" that will display the text of a fetched quote in the HTML element with an id of js-quote-text.

// Adjust getQuote to run displayQuote at the proper place in the code.

// Notice when you refresh that a quote isn't displayed. Fix that.