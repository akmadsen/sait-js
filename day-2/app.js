// EXAMPLE: Times Tables 
console.log("EXAMPLE: While Times Tables"); 

let number = 1; 
while (number <= 12) { 
    console.log("9 x " + number + " = " + (9 * number)); 
    number++; 
}

// This is just a bit long, so disabled for now
// console.log("\n\n"); 
// number = 1; 
// while (number <= 12) { 
//     let counter = 1; 
//     while (counter <= 12) { 
//         console.log(counter + " x " + number + " = " + (counter * number)); 
//         counter++; 
//     }
//     number++; 
// }



// EXAMPLE: For Loops
console.log("\nEXAMPLE: For Times Tables"); 

for (number = 1; number <= 12; number++) { 
    console.log("9 x " + number + " = " + (9 * number)); 
}

// Also disabled for being kind of long output
// console.log("\n\n")
// for (number = 1; number <= 12; number++) { 
//     for(let counter = 1; counter <= 12; counter++) {
//         console.log(counter + " x " + number + " = " + (counter * number)); 
//     }
// }



// EXAMPLE: Loop Logic
console.log("\nEXAMPLE: Loop Logic"); 

for(let i = 0; i <= 20; i++) { 
    if(i % 2 === 0) { 
        console.log(i + " is even."); 
    } else { 
        console.log(i + " is odd."); 
    }
}



// EXAMPLE: Break
console.log("\nEXAMPLE: Break"); 

console.log("Uncomment Code for Output"); 
for (number = 1; number <= 12; number++) { 
    if (number === 6) { 
        console.log("I hate the number 6"); 
        break; 
    }

    console.log("9 x " + number + " = " + (9 * number));  
}



// EXAMPLE: Arrays
console.log("\nEXAMPLE: Favourite Foods Array"); 

let foodArray = ["Cauliflower", "Curry", "Teriyaki Beef", "Butter Chicken", "Steak Salad"]

console.log("Food Array: " + foodArray); 



// EXAMPLE: Array Length
console.log("\nEXAMPLE: Food Array Length");

console.log("Food Array Length: " + foodArray.length); 



// EXAMPLE: Array Items
console.log("\nEXAMPLE: Food Array Length");

console.log("Food Array Third Item: " + foodArray[2]); 



// EXAMPLE: Array Mutation
console.log("\nEXAMPLE: Food Array Mutation");

foodArray[2] = "Asparagus"; 
console.log("Modified Food Array: " + foodArray); 



// EXAMPLE: Array Append
console.log("\nEXAMPLE: Food Array Addition");

foodArray.push("Bacon"); 
console.log("Lengthened Array: " + foodArray); 



// EXAMPLE: Array Iteration
console.log("\nEXAMPLE: Food Array Iteration");

for (let i = 0; i < foodArray.length; i++) { 
    console.log(foodArray[i]); 
}