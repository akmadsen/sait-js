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
const TIME_DELAY = 5000; // End Result 30 Seconds 

const CENTER_POS_CLASS = "quote-card-center"; 
const LEFT_POS_CLASS = "quote-card-left"; 
const RIGHT_POS_CLASS = "quote-card-right"; 

const CARD_CLASS = "quote-card"; 
const QUOTE_CONTAINER_ID = "quote-container"; 


// Components to work with 
const BODY = document.getElementsByTagName('body')[0]; 
const QUOTE_CONTAINER = document.getElementById(QUOTE_CONTAINER_ID); 
const PREV_BUTTON = document.getElementById('prev-button');
const NEXT_BUTTON = document.getElementById('next-button');
const TWITTER_BUTTON = document.getElementById('twitter-button'); 

let quoteCenter, quoteLeft, quoteRight; 
let timerID; 

let currentIndex = 0;
let isAnimating = false; 


// Function Definitions

// Book-Keeping Functions 
function nextIndex(index) { 
    return (index + 1) % quotes.length; 
}

function prevIndex(index) { 
    return (index - 1) >= 0 ? index - 1 : quotes.length - 1; 
}

// Makes a Quote Card 
function makeQuoteCard(index, posistionClass) { 
    let card = document.createElement('div'); 

    card.classList.add(CARD_CLASS); 
    card.classList.add(posistionClass); 

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
    html += "<span class=\"author\">~ " + quotes[index].author + "</span>"; 

    card.innerHTML = html; 
}

function releaseAnimationLock(event) { 
    // Release lock 
    isAnimating = false;

    // Cleanup 
    event.target.removeEventListener('transitionend', releaseAnimationLock); 
}

function shiftLeft() { 
    currentIndex = nextIndex(currentIndex);

    // Lock until animation done 
    isAnimating = true; 

    // Remove the previous item from the DOM 
    QUOTE_CONTAINER.removeChild(quoteLeft); 

    // Update References 
    quoteLeft = quoteCenter; 
    quoteCenter = quoteRight; 
    quoteRight = makeQuoteCard(nextIndex(currentIndex), RIGHT_POS_CLASS); 

    // Append new card to card container 
    QUOTE_CONTAINER.appendChild(quoteRight); 

    // Set event to release lock when transition is done 
    quoteCenter.addEventListener('transitionend', releaseAnimationLock); 
    
    // Shuffle classes around 
    quoteLeft.classList.remove(CENTER_POS_CLASS); 
    quoteLeft.classList.add(LEFT_POS_CLASS);
    
    quoteCenter.classList.remove(RIGHT_POS_CLASS); 
    quoteCenter.classList.add(CENTER_POS_CLASS); 
}

function shiftRight() { 
    currentIndex = prevIndex(currentIndex);

    // Lock until animation done 
    isAnimating = true; 

    // Remove the previous item from the DOM 
    QUOTE_CONTAINER.removeChild(quoteRight); 

    // Update References 
    quoteRight = quoteCenter; 
    quoteCenter = quoteLeft; 
    quoteLeft = makeQuoteCard(prevIndex(currentIndex), LEFT_POS_CLASS); 

    // Append new card to card container 
    QUOTE_CONTAINER.appendChild(quoteLeft); 

    // Set event to release lock when transition is done 
    quoteCenter.addEventListener('transitionend', releaseAnimationLock); 
    
    // Shuffle classes around 
    quoteRight.classList.remove(CENTER_POS_CLASS); 
    quoteRight.classList.add(RIGHT_POS_CLASS);
    
    quoteCenter.classList.remove(LEFT_POS_CLASS); 
    quoteCenter.classList.add(CENTER_POS_CLASS); 
}

// Direction should be 1 or -1
function updateQuote(direction) {

    // If we haven't passed an argument, assume "next"; 
    if (direction === undefined) { 
        direction = 1; 
    }

    // Guard against invalid input 
    if (!(direction === 1 || direction === -1)) { 
        return; 
    }

    if (direction < 0) { 
        shiftRight(); 
    } else { 
        shiftLeft(); 
    }
}

function resetTimer() {
    clearInterval(timerID);
    timerID = setInterval(updateQuote, TIME_DELAY);
}

function pushButton(dir) { 
    if (isAnimating) { 
        return; 
    }

    updateQuote(dir); 
    resetTimer(); 
}

function nextQuote(event) {
    pushButton(1); 
}

function prevQuote(event) {
    pushButton(-1); 
}

function tweetCurrentQuote(event) { 
    let text = quotes[currentIndex].quote + " - " + quotes[currentIndex].author; 
    let URI = "https://twitter.com/intent/tweet?text=" + encodeURI(text); 
    window.open (URI, "Tweet That Quote","menubar=1,resizable=1,width=550,height=420,top=500,left=500");
}

// Interactivity Hookups 
PREV_BUTTON.addEventListener('click', prevQuote);
NEXT_BUTTON.addEventListener('click', nextQuote);
TWITTER_BUTTON.addEventListener('click', tweetCurrentQuote); 

// Initialization Code 
function initialize() { 

    // Get Quote behaviour running 
    quoteCenter = makeQuoteCard(0, CENTER_POS_CLASS); 
    quoteLeft = makeQuoteCard(quotes.length - 1, LEFT_POS_CLASS); 
    quoteRight = makeQuoteCard(1, RIGHT_POS_CLASS); 
    
    QUOTE_CONTAINER.appendChild(quoteCenter); 
    QUOTE_CONTAINER.appendChild(quoteLeft); 
    QUOTE_CONTAINER.appendChild(quoteRight); 
    
    timerID = setInterval(updateQuote, TIME_DELAY);
}

BODY.onload = initialize; 