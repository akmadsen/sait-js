function calculateDogAge(humanYears, conversion) { 
    if (conversion === undefined) { 
        conversion = 7; 
    }

    return "Your doggie is " + humanYears * conversion + " years old in dog years!"; 
}

let doggie1 = 1; 
let doggie2 = 3; 
let doggie3 = 7; 

document.write("<h2>Doggie 1: " + doggie1 + " years old</h2>"); 
document.write("<p>" + calculateDogAge(doggie1) + "</p>")

document.write("<h2>Doggie 2: " + doggie2 + " years old</h2>"); 
document.write("<p>" + calculateDogAge(doggie2) + "</p>")

document.write("<h2>Doggie 3: " + doggie3 + " years old</h2>"); 
document.write("<p>" + calculateDogAge(doggie3) + "</p>")