// EX1
const sum = (num1, num2) => num1 + num2; 

console.log(sum(3,4)); 

// EX2

const fib = (n) => {
    if (n < 3) { 
        return 1; 
    }
    return fib(n-1) + fib(n-2); 
}

console.log(fib(9)); 