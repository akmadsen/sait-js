// Defined Constants 
const SUBMIT_BUTTON = document.getElementById("submit-button"); 
const FORM = document.forms[0]; // We know there's only one form 

// Variables we Care About 
let artist = "", song = ""; 

// Function Definitions
function fetchLyrics(artist, songTitle) {

    fetch("https://api.lyrics.ovh/v1/" + artist + "/" + songTitle + "")
        .then(function (result) {
            if (!result.ok) {
                throw Error(result.statusText);
            }

            return result.json();
        })
        .then(function (data) {
            let container = document.getElementById('lyric-container');
            let lyrics = document.createElement('div');

            lyrics.innerHTML = data.lyrics.replace(/(\n|\r\n|\r)/g, "\<br \/\>");

            container.innerHTML = ""; // Clearing inner html
            container.appendChild(lyrics);
        })
        .catch(function (error) {
            console.log("Error!");
            console.log(error);
        });
}

// Interactivity 

SUBMIT_BUTTON.addEventListener('click', function(event) { 
    event.preventDefault(); 

    artist = FORM['artist'].value; 
    song = FORM['song'].value; 

    let errors = []; 

    if(!artist) { 
        errors.push("Artist must be defined"); 
    }

    if(!song) { 
        errors.push("Song must be defined"); 
    }

    console.log(errors); 

}); 
// fetchLyrics("Celldweller", "Against the Tide");