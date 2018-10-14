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
const QUOTE_CONTAINER_ID = "quote-container"; 

// Components to work with 
const BODY = document.getElementsByTagName('body')[0]; 
const QUOTE_CONTAINER = document.getElementById(QUOTE_CONTAINER_ID); 
const PREV_BUTTON = document.getElementById('prev-button');
const NEXT_BUTTON = document.getElementById('next-button');

let quoteCenter, quoteLeft, quoteRight; 
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
    let html = ""; 

    html += "<span class=\"quote\">"
    html += "<i class=\"fas fa-quote-left left-quote\"></i>"; 
    html += quotes[index].quote; 
    html += "<i class=\"fas fa-quote-right right-quote\"></i>"; 
    html += "</span>"; 
    html += "<span class=\"author\">" + quotes[index].author + "</span>"; 

    card.innerHTML = html; 
}

// Direction should be 1 or -1
function updateQuote(direction) {

    // Guard against invalid input 
    if (!(direction === 1 || direction === -1)) { 
        return; 
    }

    if (direction > 0) { 
        currentIndex = nextIndex(currentIndex);
    } else { 
        currentIndex = prevIndex(currentIndex); 
    }

    setQuote(quoteCenter, currentIndex);
}

function resetTimer() {
    clearInterval(timerID);
    timerID = setInterval(updateQuote, TIME_DELAY);
}

function nextQuote(event) {
    updateQuote(1); 
    resetTimer();
}

function prevQuote(event) {
    updateQuote(-1); 
    resetTimer();
}



// Interactivity Hookups 
PREV_BUTTON.addEventListener('click', prevQuote);
NEXT_BUTTON.addEventListener('click', nextQuote);



// Initialization Code 
function initialize() { 
    console.log("INITIALIZED"); 
    BODY.style.backgroundColor = "red"; 

    // Get Quote behaviour running 
    quoteCenter = makeQuoteCard(0, CENTER_ID); 
    quoteLeft = makeQuoteCard(quotes.length - 1, LEFT_ID); 
    quoteRight = makeQuoteCard(1, RIGHT_ID); 
    
    QUOTE_CONTAINER.appendChild(quoteCenter); 
    QUOTE_CONTAINER.appendChild(quoteLeft); 
    QUOTE_CONTAINER.appendChild(quoteRight); 
    
    timerID = setInterval(updateQuote, TIME_DELAY);
}

BODY.onload = initialize; 


// DEBUG
// console.log(makeQuoteCard(0, CENTER_ID)); 