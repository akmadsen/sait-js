const MAX_AGE = 82; 

function calculateSupply(age, rate) {
    let amount = Math.ceil((MAX_AGE - age + 1) * rate); 
    return "You will need " + amount + " to last you until the ripe old age of " + MAX_AGE + "."; 
}

document.write("Test 1: 28 years old, 50 units / year"); 
document.write("<p>" + calculateSupply(28, 50) + "</p>"); 

document.write("Test 2: 16 years old, 110 units / year"); 
document.write("<p>" + calculateSupply(16, 110) + "</p>"); 

document.write("Test 3: 34 years old, 365 units / year"); 
document.write("<p>" + calculateSupply(34, 365) + "</p>"); 

document.write("Test 4: 34 years old, 266.666 units / year"); 
document.write("<p>" + calculateSupply(34, 266.666) + "</p>"); 