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
    year: 1972,
    tags: ["humour", "comedy"]
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
  }, 
  {
    quote: "You miss 100% of the shots you don't take - Wayne Gretzky",
    source: "Michael Scott",
    citation: "The Office",
    tags: ["humour", "comedy"]
  }, 
  {
    quote: "If you ain't first, you last",
    source: "Ricky Bobby",
    citation: "Talladega Nights",
    tags: ["humour", "comedy"]
  }, 
  {
    quote: "Everyone has a plan until they get punched in the face!",
    source: "Mike Tyson",
    citation: "Sports Illustrated"
  }, 
  {
    quote: "It is during our darkest moments that we must focus to see the light",
    source: "Aristotle",
    citation: "Twitter",
    tags: ["philosophy", "lifestyle", "spiritual"]
  }
];

// END OF Quote array of objects to hold random quotes

//Function to generate a random index number [0] - [4] that returns that quote index from the array
function getRandomQuote () {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];

};

//function to generate a random number as an rgb value
function backgroundColor() {
  return Math.floor(Math.random() * 256);
}

//calls the function to produce 3 values and concatenate to for rgb();
function getRandomColor() {
  let r = backgroundColor();
  let g = backgroundColor();
  let b = backgroundColor();

  let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  //adds the value to the body property
  document.body.style.background = rgb;

};

// Function used to add the random quote HTML into the DOM using dot notation
// calls the getRandomQuote function and assigns it a variable
// sets the base html to the random quote generated
// if the random quote has a citation or and a year - add html
//then look to see if it has the citation or year individually to add html

function printQuote() {
  let randomQuote = getRandomQuote();
  
  html = '<p class = "quote">' + randomQuote.quote + '</p>';
  html += '<p class = "source">' + randomQuote.source;

  if (randomQuote.citation && randomQuote.year) {
     html += '<span class= "citation">' + randomQuote.citation + '</span><span class="year">' + randomQuote.year + '</span>';
     } else if (randomQuote.citation) {
       html += '<span class= "citation">' + randomQuote.citation + '</span>';
     } else if (randomQuote.year) {
       html += '<span class= "year">' + randomQuote.year + '</span></p>';
     } else if (randomQuote.tags) {
       html+= '<span class= "tags">' + randomQuote.tags.join(" | ") + '</span>';
     };
    
    html += '</p>'; 
    //targets the quotebox id to add to the page container
  let quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = html;
};

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//changes the quote and background color every 5 seconds
let quoteAuto = setInterval(function () {
  printQuote();
  getRandomColor();
}, 5000);

