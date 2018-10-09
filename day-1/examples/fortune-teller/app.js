let numberOfChildren = 4; 
let partnersName = "Lando Calrissian"; 
let geographicLocation = "New Vegas"; 
let jobTitle = "Kitten Tamer"; 

function writeCategory(category, quality) { 
    document.write("<h2>" + category + "</h2>"); 
    document.write("<p>" + quality + "</p>"); 
}

document.write("<h1>YOUR FUTURE</h1>");
writeCategory("Your Partner", partnersName); 
writeCategory("Your Location", geographicLocation); 
writeCategory("Your Job", jobTitle); 