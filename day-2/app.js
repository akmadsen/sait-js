// EXAMPLE: Times Tables 
console.log("EXAMPLE: Times Tables"); 

let number = 1; 
while (number <= 12) { 
    console.log("9 x " + number + " = " + (9 * number)); 
    number++; 
}

console.log("\n\n"); 
number = 1; 
while (number <= 12) { 
    let counter = 1; 
    while (counter <= 12) { 
        console.log(counter + " x " + number + " = " + (counter * number)); 
        counter++; 
    }
    number++; 
}