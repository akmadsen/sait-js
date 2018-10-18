const multiply = (a, b=1) => {
    if (!a) { 
        throw Error("THIS IS NOT OKAY"); 
    }
    
    return a * b; 
}
console.log(multiply(5,4)); // 20
console.log(multiply(4)); // 4 
console.log(multiply()); // Error Thrown 