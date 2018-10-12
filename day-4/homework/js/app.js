// Data to work with 
let gibsonQuotes = [
    "The future is here. It's just not widely distributed yet. - William Gibson", 
    "Time moves in one direction, memory in another. - William Gibson", 
    "Language is to the mind more than light is to the eye. - William Gibson", 
    "When you want to know how things really work, study them when they're coming apart. - William Gibson", 
    "Things aren't different. Things are things. - William Gibson"
]; 

// Components to work with 
let quoteBox = document.getElementById('quote-box'); 
let prevButton = document.getElementById('prev-button'); 
let nextButton = document.getElementById('next-button'); 


// Defined variables and constants
let timeDelay = 3000; // End Result 30 Seconds 
let currentIndex = 0; 

function setQuote(index) { 
    quoteBox.innerHTML = gibsonQuotes[index]; 
}

// Quote Update Functions 
function updateQuote() { 
    currentIndex = (currentIndex + 1) % gibsonQuotes.length; 
    setQuote(currentIndex); 
}

// Get Quote behaviour running 
quoteBox.innerHTML = gibsonQuotes[currentIndex]; 
let timerId = setInterval(updateQuote, timeDelay); 

function resetTimer() { 
    clearInterval(timerId); 
    timerId = setInterval(updateQuote, timeDelay); 
}

function nextQuote(event) { 
    currentIndex = (currentIndex + 1) % gibsonQuotes.length; 
    setQuote(currentIndex); 
    resetTimer(); 
}

function prevQuote(event) { 
    currentIndex = (currentIndex - 1) >= 0 ? currentIndex - 1 : gibsonQuotes.length - 1; 
    setQuote(currentIndex); 
    resetTimer(); 
}

// Initialize Buttons 
prevButton.addEventListener('click', prevQuote); 
nextButton.addEventListener('click', nextQuote); 
