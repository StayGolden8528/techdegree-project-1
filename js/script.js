/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//global variables

let html = '';

//Quote array of objects to hold random quotes
let quotes = [
  {
    quote: "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month",
    source: "Theodore Roosevelt",
    citation: "brainyquote.com",
    year: 1900
  },
  {
    quote: "They say marriages are made in Heaven. But so is thunder and lightning.",
    source: "Clint Eastwood",
    citation: "brainyquotes.com",
    year: 1972
  },
  {
    quote: "No man has a good enough memory to be a successful liar.",
    source: "Abraham Lincoln",
    citation: "brainyquotes.com",
    year: 1860
  },
  {
    quote: "Get your facts first, then you can distort them as you please.",
    source: "Mark Twain",
    citation: "brainyquotes.com",
    year: 1875
  },
  {
    quote: "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.",
    source: "Reba McEntire",
    citation: "brainyquotes.com",
    year: 1985
  },
  {
    quote: "Love the life you live. Live the life you love.",
    source: "Bob Marley",
    citation: "The Whalers"
  }, {
    quote: "You miss 100% of the shots you don't take - Wayne Gretzky",
    source: "Michael Scott",
    citation: "The Office"
  }, {
    quote: "If you ain't first, you last",
    source: "Ricky Bobby",
    citation: "Talladega Nights"
  }, {
    quote: "Get your facts first, then you can distort them as you please.",
    source: "Life is what happens when you're busy making other plans",
    citation: "The Beatles"
  }, {
    quote: "It is during our darkest moments that we must focus to see the light",
    source: "Aristotle",
    citation: "Twitter"
  }
];

// END OF Quote array of objects to hold random quotes

//Function to generate a random index number [0] - [4] that returns that quote index from the array
function getRandomQuote () {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];

};
console.log(getRandomQuote());

// Function used to add the random quote HTML into the DOM
// calls the getRandomQuote function and assigns it a variable
// sets the base html to the random quote generated
// if the random quote
function printQuote() {
  let randomQuote = getRandomQuote();
  
  html = '<p class = "quote">' + randomQuote.quote + '</p>';
  html += '<p class = "source">' + randomQuote.source;

  if (randomQuote.citation && randomQuote.year) {
     html += '<span class="citation">' + randomQuote.citation + '</span><span class="year">' + randomQuote.year + '</span>'
     } else if (randomQuote.citation) {
       html += '<span class="citation">' + randomQuote.citation + '</span>'
     } else if (randomQuote.year) {
       html += '<span class="year">' + randomQuote.year + '</span></p>'
     };

    html += '</p>'; 

  let quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = html;
};



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

let quoteAuto = setInterval(function () {
  printQuote();
}, 5000);

