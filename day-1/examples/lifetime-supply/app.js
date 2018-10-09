let currentAge = 28; 
let maxAge = 82; 
let amountPerDay = 0.2; 

let lifetimeSupply = amountPerDay * (maxAge - currentAge + 1); 

document.write("<h1>Lifetime Supply Calculator</h1>"); 
document.write("<p>A lifetime of Caramilk for me would be " + lifetimeSupply + " bars.</p>")
