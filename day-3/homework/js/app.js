// NOTE: Depends on modernizer.js being loaded first!

let geoImage = document.createElement('img'); 
let mainSection = document.querySelector('main'); 

if(Modernizr.geolocation) { 
    geoImage.src = "https://placekitten.com/200/300"; 
    geoImage.alt = "Kitten Image";
} else { 
    geoImage.src = "http://www.placepuppy.net/400/250"; 
    geoImage.alt = "Puppy Image";
}

mainSection.appendChild(geoImage); 

// History of Length 1 means that this was a new tab 
document.bgColor = (history.length === 1) ? 'lightblue' : '#ffb347'; 

// Styling the Header
let topHeader = document.getElementById('top-header');
topHeader.style.fontFamily = "Monospace"; 
topHeader.style.color = "green"; 

// Styling the Even Nav Items
let navItems = document.getElementsByClassName('nav-item'); 
for(let i = 0; i < navItems.length; i++) { 
    let navItem = navItems[i]; 
    if(i % 2 === 0) { 
        navItem.style.backgroundColor = "#fea3aa"; 
    } else { 
        navItem.style.backgroundColor = "#baed91"; 
    }
}