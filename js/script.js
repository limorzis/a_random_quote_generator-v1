/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [
    {
       quote: 'Yes, I did it. I killed Yvette. I hated her <i>so</i> much, it- it- the- it- the fla- flames, flames, on the side of my face... brea- breathing, breathless, heaving breaths—',
       source: 'Mrs. White',
       citation: 'Clue',
       year: 1985
    },
    {
       quote: 'Thank God for the model trains, you know? If they didn\'t have the model trains they wouldn\'t have gotten the idea for the big trains.',
       source: 'Amber Cole',
       citation: 'A Mighty Wind',
       year: 2003,
       tag: 'Locomotive Engineering'
    },
    {
       quote: 'We all wear masks, metaphorically speaking.',
       source: 'Dr. Arthur Neuman',
       citation: 'The Mask',
       year: 1994,
       tag: 'Philosophy'
    },
    {
       quote: 'Kill the Lawyer!',
       source: 'Rufio',
       citation: 'Hook',
       year: 1991,
       tag: 'Humor'
    }
    ,
    {
       quote: 'Torquemada—do not beg him for mercy. Torquemada—do not ask him for forgiveness. Let\'s face it - you can\'t Torquemada anything!',
       source: 'Chief Monk',
       citation: 'History of the World Part I',
       year: 1981
    }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // `randomNumber` variable generates a random number between zero and the last index in the `quotes` array
  const randomNumber = Math.floor( Math.random() * quotes.length );

  // Grab a random object from the `quotes` array and store it in variable `selectedQuote`
  const selectedQuote = (quotes[randomNumber]);

  // Return `selectedQuote` 
  return selectedQuote;
}


/***
 * `printQuote` function
***/
function printQuote() {
  // Create a variable that calls the getRandomQuote() function
  const randomQuote = getRandomQuote();

  // Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
  let html = `
    <p class = "quote">${randomQuote.quote}</p>
    <p class = "source">${randomQuote.source}`;
  
  // If the random quote object has a citation, year, or tag property, 
  //concatenate a <span> element with the corresponding class to the HTML string.
  if (randomQuote.citation) {
    html += `<span class = "citation">${randomQuote.citation}</span>`;
  };
  if (randomQuote.year) {
    html += `<span class = "year">${randomQuote.year}</span>`;
  };
  if (randomQuote.tag) {
    html += `<span class = "tag">${randomQuote.tag}</span>`;
  };
  html += `</p></div>`;

  // Set the innerHTML of the quote-box div to equal the complete HTML string
  document.querySelector('#quote-box').innerHTML = html;

  // Change the background color to a random color when a new quote prints to the page.
  function randomRGB() {
    const randomValue = () => Math.floor(Math.random() * 256);
    const color = `rgb( ${randomValue()}, ${randomValue()}, ${randomValue()})`;
    return color;
  }
  document.body.style.backgroundColor = randomRGB();
}

// printQuote()
printQuote();

/*** 
 create a timing function with the setInterval() method to print a 
 new quote to the page at regular intervals (10 seconds). 
***/
setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
// console.log(quotes[1].source);
document.getElementById('load-quote').addEventListener("click", printQuote, false);