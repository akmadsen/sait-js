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