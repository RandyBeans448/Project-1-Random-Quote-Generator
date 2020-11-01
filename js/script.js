/*
This is the array of objects that will hold my quotes.
Each object has four properties.
*/

var quotes = [
    //Quote 1
   {quote: "Better to remain silent and be thought a fool, then to speak out and remove all doubt.",
    source: "Abraham Lincoln",
    citation: "Speech",
    year: "Unknown"},
    //Quote 2
   {quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
    source: "Oscar Wilde",
    citation: "Speech",
    year: "1885"},
    //Quote 3
   {quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    source: "Winston Churchill",
    citation: "Speech",
    year: "1943"},
    //Quote 4
   {quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    source: "Dr. Seuss",
    citation: "Book",
    year: "1990"},
    //Quote 4
   {quote: "You have to call me night hawk.",
    source: "Step Brothers",
    citation: "Movie",
    year: "2008"},
    //Quote 5
   {quote: "It's just a flesh wound.",
    source: "Monty python and the holy grail",
    citation: "Movie",
    year: "2008"},
    //Quote 6
   {quote: "What is this? A school for ants!",
    source: "Zoolander",
    citation: "Movie",
    year: "2001"},
    //Quote 7
   {quote: "No, I am your father!",
    source: "Darth Vader",
    citation: "Movie",
    year: "1980"},
    //Quote 8
   {quote: "Maybe ever’body in the whole damn world is scared of each other.",
    source: "John Steinbeck",
    citation: "Book",
    year: "1937"},
    //Quote 9
    {quote: "Life is what happens to you while you're busy making other plans.",
     source: "John Lennon",
     citation: "Speech",
     year: "1972"},
     //Quote 10
     {quote: "Anything worth doing good takes a little chaos.",
      source: "Flea",
      citation: "Book",
      year: "2005"}
];

/*
This function creates random colours and targets the
HTML document directly. I have included a onclick command
in the HTML button ID so that the colour changes everytime
the quote button is clicked. The code for this was
taken right from the begining of the Techdegree.
*/



function getRandomColour() {
  var red = Math.floor(Math.random() * 256 );
  var green = Math.floor(Math.random() * 256 );
  var blue = Math.floor(Math.random() * 256 );
  var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.body.style.background = rgbColor;
}


/*
This function creates a random number which is as long as the
array if quotes and then loops through the array and returns
a random result when called. I copied this and made slight alterations
from the Objects in arrays practice sessions. I aslo had help from the
treehouse community (Steven Parker is a nice man).
*/


function getRandomQuote(quotes) {
  var arrayQuote = Math.floor(Math.random() * (quotes.length));
    for (var i = 0; i < quotes.length; i += 1) {
      var randomQuoteResult = quotes[arrayQuote];
    }
  return randomQuoteResult;
}

// Here I am calling the function so it activates.


getRandomQuote(quotes);

/*
This function takes the random result from the getRandomQuote
function and stores it in a new variable.
Then it is stored in another variable with each of the properties result
printed to the HTML by targeting the respective class and having the
quote box class equal the htmlMessage variable where all of the results are
stored.
*/

function printQuote() {
  var printResult = getRandomQuote(quotes);
  var htmlMessage = '';
  htmlMessage += '<p class="quote">' + printResult.quote + '</p>'
  htmlMessage += '<p class="source">' + printResult.source + '</p>'
  htmlMessage += '<p class="citation">' + printResult.citation + '</p>'
  htmlMessage += '<p class="year">' + printResult.year + '</p>'
  document.getElementById('quote-box').innerHTML = htmlMessage;
}

// The function is then called to activate the function.


printQuote();

//setInterval calls every 25 seconds changing the background color and quote 

setInterval(() => printQuote(), 25000);
setInterval(() => getRandomColour(), 25000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);
