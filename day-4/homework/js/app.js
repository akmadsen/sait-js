// Quote Data
let quotes = [{
        quote: "The future is here. It's just not widely distributed yet.",
        author: "William Gibson"
    },
    {
        quote: "Time moves in one direction, memory in another.",
        author: "William Gibson"
    },
    {
        quote: "Language is to the mind more than light is to the eye.",
        author: "William Gibson"
    },
    {
        quote: "When you want to know how things really work, study them when they're coming apart.",
        author: "William Gibson"
    },
    {
        quote: "Things aren't different. Things are things.",
        author: "William Gibson"
    },
    {
        quote: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
        author: "Laozi"
    },
    {
        quote: "A good traveler has no fixed plans, and is not intent on arriving.",
        author: "Laozi"
    },
    {
        quote: "Nature does not hurry, yet everything is accomplished.",
        author: "Laozi"
    },
    {
        quote: "If you do not change direction, you may end up where you are heading.",
        author: "Laozi"
    },
    {
        quote: "Silence is a source of great strength.",
        author: "Laozi"
    },
    {
        quote: "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
        author: "Douglas Adams"
    },
    {
        quote: "Flying is learning how to throw yourself at the ground and miss.",
        author: "Douglas Adams"
    },
    {
        quote: "Time is an illusion. Lunchtime doubly so.",
        author: "Douglas Adams"
    },
    {
        quote: "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
        author: "Douglas Adams"
    },
    {
        quote: "To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity.",
        author: "Douglas Adams"
    }
];



// Defined variables and constants
const TIME_DELAY = 3000; // End Result 30 Seconds 
let currentIndex = 0;

const CENTER_ID = "quote-card-center"; 
const LEFT_ID = "quote-card-left"; 
const RIGHT_ID = "quote-card-right"; 

const CARD_CLASS = "quote-card"; 
const QUOTE_CONTAINER_CLASS = "quote-container"; 
// Components to work with 
let body = document.getElementsByTagName('body')[0]; 
let quoteBox = document.getElementById('quote-box'); // TODO: Split this to Quotes L/C/R
let prevButton = document.getElementById('prev-button');
let nextButton = document.getElementById('next-button');

let quoteCard; 
let timerID; 

// Function Definitions

// Book-Keeping Functions 
function nextIndex(index) { 
    return (index + 1) % quotes.length; 
}

function prevIndex(index) { 
    return (index - 1) >= 0 ? index - 1 : quotes.length - 1; 
}

// Makes a Quote Card 
function makeQuoteCard(index, id) { 
    let card = document.createElement('div'); 

    card.id = id; 
    card.classList.add(CARD_CLASS); 

    setQuote(card, index); 

    return card; 
}

function setQuote(card, index) {
    let html = "<div class=\"" + QUOTE_CONTAINER_CLASS + "\">";
    html += "<i class=\"fas fa-quote-left\"></i>"; 
    html += "<span class=\"quote\">" + quotes[index].quote + "</span>"; 
    html += "<i class=\"fas fa-quote-right\"></i>"; 
    html += "<br />"; 
    html += "<span class=\"author\">" + quotes[index].author + "</span>"; 
    html += "</div>"; 

    card.innerHTML = html; 
}

function updateQuote() {
    currentIndex = nextIndex(currentIndex);
    setQuote(quoteBox, currentIndex);
}

function resetTimer() {
    clearInterval(timerID);
    timerID = setInterval(updateQuote, TIME_DELAY);
}

function nextQuote(event) {
    currentIndex = nextIndex(currentIndex);

    setQuote(quoteBox, currentIndex);
    resetTimer();
}

function prevQuote(event) {
    currentIndex = prevIndex(currentIndex);

    setQuote(quoteBox, currentIndex);
    resetTimer();
}



// Interactivity Hookups 
prevButton.addEventListener('click', prevQuote);
nextButton.addEventListener('click', nextQuote);



// Initialization Code 
function initialize() { 
    console.log("INITIALIZED"); 
    body.style.backgroundColor = "red"; 

    // Get Quote behaviour running 
    setQuote(quoteBox, currentIndex);
    timerID = setInterval(updateQuote, TIME_DELAY);
}

body.onload = initialize; 


// DEBUG
// console.log(makeQuoteCard(0, CENTER_ID)); 