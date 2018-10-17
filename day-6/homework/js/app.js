// Safety check - make sure we have jQuery loaded in one form or another
window.jQuery || document.write('<script src="./js/jquery.js"></script>');



// Defined Constants 
const HUES = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'monochrome']; 
const LUMINOSITIES = ['bright', 'light', 'dark']; 

const MIN_COUNT = 1; 
const INITIAL_COUNT = 3; // Start with a default count of 3
const MAX_COUNT = 10; 



// jQuery IDs 
const QUANTITY_DISPLAY = '#quantity-display'; 
const COLOR_TILE_CONTAINER = "#color-tile-container"; 

// Tracking Variables 
let count = INITIAL_COUNT; 



// Function Definitions 
function getRandomHue() { 
    let randomIndex = Math.floor(Math.random() * HUES.length);
    return HUES[randomIndex]; 
}

function getRandomLuminosity() { 
    let randomIndex = Math.floor(Math.random() * LUMINOSITIES.length); 
    return LUMINOSITIES[randomIndex]; 
}

function updateCounterDisplay() { 
    $(QUANTITY_DISPLAY).text(count); 
}

function incrementCounter() { 
    count = (count + 1) > MAX_COUNT ? MAX_COUNT : count + 1; 
    updateCounterDisplay(); 
}

function decrementCounter() { 
    count = (count - 1) < MIN_COUNT ? MIN_COUNT : count - 1; 
    updateCounterDisplay(); 
}

function getColourGeneratorObject() { 
    let result = {}; 

    result['count'] = count; // Coun't isn't technically part of the form
    $.each($('form').serializeArray(), function(index, value) {
        result[value.name] = value.value; 
    });  

    // Apply randomness 
    if (result['hue'] === "") { 
        result['hue'] = getRandomHue(); 
    }

    if (result['luminosity'] === "random") { 
        result['luminosity'] = getRandomLuminosity(); 
    }

    return result; 
}

function applyColourGeneration(colorDefinitions) { 
    let colors = randomColor(colorDefinitions); 

    $(COLOR_TILE_CONTAINER).empty(); 

    $.each(colors, function(index, value) {
        // If the value is unspecified, then we don't want to interfere
        if (value === "unspecified") { 
            return; 
        }

        let card = $('<div class=color-tile></div>'); 

        card.css({
            "background-color": value
        });

        $(COLOR_TILE_CONTAINER).append(card); 
    }); 
}

function init() { 
    applyColourGeneration(getColourGeneratorObject()); 
}

// Interactivity 
init(); 

$('#submit-button').click(function(event) {
    event.preventDefault(); 

    let colourDef = getColourGeneratorObject(); 
    applyColourGeneration(colourDef); 
}); 

$("#more-button").click(incrementCounter); 
$("#less-button").click(decrementCounter); 

