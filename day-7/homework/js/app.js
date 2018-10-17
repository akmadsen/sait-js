fetch("https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime")
.then(function(result) { 
    return result.json(); 
})
.then(function(data) {
    let container = document.getElementById('lyric-container'); 
    let lyrics = document.createElement('div'); 

    lyrics.innerHTML = data.lyrics.replace(/(\n|\r\n|\r)/g, "\<br \/\>"); 

    container.innerHTML = ""; // Clearing inner html
    container.appendChild(lyrics); 
}); 