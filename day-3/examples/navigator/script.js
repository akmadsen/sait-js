console.log("EXAMPLE: Navigator")
console.log(navigator.userAgent); 
console.log(navigator.vendor); 
console.log(navigator.platform); 

console.log("\n\nEXAMPLE: Geolocation"); 

function success(position) { 
    console.log("LATITUDE: " + position.coords.latitude); 
    console.log("LONGITUDE: " + position.coords.longitude); 
    console.log("ALTITUDE: " + position.coords.altitude); 
    console.log("SPEED: " + position.coords.speed); 
    console.log("HEADING: " + position.coords.heading); 
}

function geoError(errorObj) { 
    alert("Something went wrong with Geolocation"); 
}

navigator.geolocation.getCurrentPosition(success, geoError); 