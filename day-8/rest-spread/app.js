let createArray = (num1, ...numbers) => { 
    console.log(numbers); 
}

createArray(10,20,40,60,90); 

let spreadOp = (...list) => { 
    console.log(list); 
}

spreadOp([1,2,3,4,5]); 