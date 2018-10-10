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
//     for(counter = 1; counter <= 12; counter++) {
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