/**
 * Here is my custom JS code.
 */


// EXAMPLE: Logging
console.log("EXAMPLE: Logging");
// alert("Gotcha!"); // Commented Out for Convenience
console.log("Hey there");
document.write("1337 haxx0rz"); 


// EXAMPLE: Vars 
console.log("\nEXAMPLE: Vars");
var test = "I am a Variable"; 
console.log(test); 

// EXAMPLE: Arithmetic 
var num1 = 4; 
var num2 = 3; 

console.log("\nEXAMPLE: Arithmetic");
console.log("num1: " + num1 + "\t\tnum2: " + num2); 
console.log("Negation:\t\t" + (-num1)); 
console.log("Addition:\t\t" + (num1 + num2)); 
console.log("Subtraction:\t" + (num1 - num2)); 
console.log("Multiplication:\t" + (num1 * num2)); 
console.log("Division:\t\t" + (num1 / num2)); 
console.log("Modulo:\t\t\t" + (num1 % num2)); 

console.log("Div by 0:\t\t" + (1 / 0));
console.log("sqrt -1:\t\t" + Math.sqrt(-1)); 

// EXAMPLE: Your name 
console.log("\nEXAMPLE: Concatenation"); 
var firstName = "Alexander"; 
var lastName = "Madsen"; 
var fullName = firstName + " " + lastName; 
console.log("Full Name:", fullName); // Testing comma

// EXAMPLE: Function 
console.log("\nEXAMPLE: Function"); 
function pirateQuote() { 
    console.log("The Pirate's Code is more like... A guideline than actual rules."); 
}

pirateQuote(); 

// EXAMPLE: Arguments
console.log("\nEXAMPLE: Arguments"); 

function makeFullName(firstName, lastName) { 
    return firstName + " " + lastName; 
}

console.log("Full Name: " + makeFullName("Alex", "Madsen")); 

// EXAMPLE: Return Statements
console.log("\nEXAMPLE: Return Statements"); 

let heather = makeFullName("Heather", "Tovey"); 

console.log("Return Value: " + heather); 