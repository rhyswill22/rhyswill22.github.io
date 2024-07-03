// Select the new quote button using a querySelector. Assign it to a new variable.
const newQuote = document.querySelector('#js-new-quote');

// Write an event listener to check if the button is clicked. When the button is clicked, run a function called "getQuote".
newQuote.addEventListener('click', getQuote);

// Add a new variable that holds the API endpoint:
const apiEndpoint = "https://api.api-ninjas.com/v1/quotes?category=failure";
const apiKey = "SDCfrWxWtfFwZWNtdSpj7g==NwEOFuDcw0CsJ9zh";

let answerTxt = document.querySelector('#js-answer-text');
let answer = '';

// Change the getQuote function to use the fetch method to get a random quote from that endpoint.
async function getQuote() {
    try {
        const response = await fetch(apiEndpoint, {
            headers: {
                'X-Api-Key': apiKey
            }
        });

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();

        // If successful, output the quote to the console
    
        // if (json.length > 0) {
            displayQuote(json[0].quote);
            answer = json[0].author;
            answerTxt.textContent = '';
        // }
    } catch (error) {

        // If it fails, output an error message to the console AND via alert

        console.log(error);
        alert('Error. Could not fetch quote');

    }
}

// Write a second function called "displayQuote" that will display the text of a fetched quote in the HTML element with an id of js-quote-text.
function displayQuote(quote) {

    const quoteText = document.querySelector('#js-quote-text');

    quoteText.textContent = quote;

}


const answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

// Notice when you refresh that a quote isn't displayed. Fix that.
// Fetch a quote when the page loads
// getQuote();

// Write the function declaration, and check the button click works by returning a message in the console every time the button is clicked.
function displayAnswer() {
    console.log('Display answer was clicked');
    answerTxt.textContent = answer;
}


function displayHint() {
    const hintText = document.querySelector('#js-hint-text');
    const initials = author.split(' ').map(name => name[0]).join('');
    hintText.textContent = initials;
}


const hintBtn = document.querySelector('#js-hint').addEventListener('click', displayHint);

getQuote();