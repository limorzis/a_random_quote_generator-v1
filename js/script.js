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
       year: 2003
    },
    {
       quote: 'We all wear masks, metaphorically speaking.',
       source: 'Dr. Arthur Neuman',
       citation: 'The Mask',
       year: 1994
    },
    {
       quote: 'Kill the Lawyer!',
       source: 'Rufio',
       citation: 'Hook',
       year: 1991
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
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  const randomNumber = Math.floor( Math.random() * quotes.length );

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  const selectedQuote = (quotes[randomNumber]);

  // 3. Return the variable storing the random quote object
        // console.log(randomNumber);
        // console.log(quotes[randomNumber]);
        // console.log(selectedQuote);  
  // console.log(selectedQuote);
  return selectedQuote;
}

// getRandomQuote()
// const randomQuote = getRandomQuote();
// console.log(randomQuote);
// console.log(randomQuote.quote);


// let codeBlock = ``;
// codeBlock += `${quote}` + `${source}` + `${citation}` + `${year}`;




/***
 * `printQuote` function
***/


function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
  const randomQuote = getRandomQuote();
  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
  // let html =`
  //   <p class = "quote">${randomQuote.quote}</p><p class = "source">${randomQuote.source}<span class = "citation">${randomQuote.citation}</span><span class = "year">${randomQuote.year}</span></p>
  //   `;

  // html += `
  //   <p class = "quote">${randomQuote.quote}</p>
  //   <p class = "source">${randomQuote.source}
  //     <span class = "citation">${randomQuote.citation}</span>
  //     <span class = "year">${randomQuote.year}</span></p>
  // `;

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
  const quote = `<p class = "quote">${randomQuote.quote}</p>`;
  const source = `<p class = "source">${randomQuote.source}`;
  const citation = `<span class = "citation">${randomQuote.citation}</span>`;
  const year = `<span class = "year">${randomQuote.year}</span></p>`;
  
  let html = `${quote}` + `${source}` + `${citation}` + `${year}`;

  document.querySelector('#quote-box').innerHTML = html;
  console.log(html);
}

// printQuote()
printQuote()


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
// console.log(quotes[1].source);
document.getElementById('load-quote').addEventListener("click", printQuote, false);