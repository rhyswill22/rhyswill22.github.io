// Select the new quote button using a querySelector. Assign it to a new variable.
const newQuote = document.querySelector('#js-new-quote');

// Write an event listener to check if the button is clicked. When the button is clicked, run a function called "getQuote".

newQuote.addEventListener('click', getQuote);


// Add a new variable that holds the API endpoint: 

const apiEndpoint = 'https://favqs.com/api/qotd';


let answerTxt = document.querySelector('#js-answer-text')
let answer = '';
// Change the getQuote function to use the fetch method to get a random quote from that endpoint.

async function getQuote()
{
try{
const response = await fetch(apiEndpoint);
    if(!response.ok){
        throw Error(response.statusText)

    }


    const json = await response.json();
    // If successful, output the quote to the console
    displayQuote(json.question);
    answer = json["answer"];
    answerTxt.textContent = '';
    }

    catch(error){
        // If it fails, output an error message to the console AND via alert
        console.log(error);
        alert('Error. Could not fetch quote');

    }
}





// Write a second function called "displayQuote" that will display the text of a fetched quote in the HTML element with an id of js-quote-text.


function displayQuote(quote)
{
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}


// Adjust getQuote to run displayQuote at the proper place in the code.

const answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

// Notice when you refresh that a quote isn't displayed. Fix that.

// Write the function declaration, and check the button click works by returning a message in the console everytime the button is clicked.
function displayAnswer(){
    console.log('Display answer was clicked');
    answerTxt.textContent = answer;
}

getQuote();