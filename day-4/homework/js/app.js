// Data to work with 
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

// Components to work with 
let quoteBox = document.getElementById('quote-box');
let prevButton = document.getElementById('prev-button');
let nextButton = document.getElementById('next-button');


// Defined variables and constants
let timeDelay = 3000; // End Result 30 Seconds 
let currentIndex = 0;

function setQuote(index) {
    quoteBox.innerHTML = "<p>" + quotes[index].quote + " - " + quotes[index].author + "</p>";
}

// Quote Update Functions 
function updateQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    setQuote(currentIndex);
}

// Get Quote behaviour running 
setQuote(currentIndex);
let timerId = setInterval(updateQuote, timeDelay);

function resetTimer() {
    clearInterval(timerId);
    timerId = setInterval(updateQuote, timeDelay);
}

function nextQuote(event) {
    currentIndex = (currentIndex + 1) % quotes.length;
    setQuote(currentIndex);
    resetTimer();
}

function prevQuote(event) {
    currentIndex = (currentIndex - 1) >= 0 ? currentIndex - 1 : quotes.length - 1;
    setQuote(currentIndex);
    resetTimer();
}

// Initialize Buttons 
prevButton.addEventListener('click', prevQuote);
nextButton.addEventListener('click', nextQuote);