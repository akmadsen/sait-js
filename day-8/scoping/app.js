let condition = true; 

if (condition) { 
    let a = 'Zeta'; 
    console.log(a); // Zeta
}

try { 
    console.log(a); // Should be undefined 
} catch (e) { 
    console.log("ERROR THROWN"); 
    console.log(e); 
}

// Experiments in Const

const discount = 3.4; 

try { 
    discount = 5.6; 
} catch (e) { 
    console.log("Tried to apply to const"); 
    console.log(e); 
}

const arr = [1,2,3]; 
const obj = { id: 0, name: 'Alpha' }; 

// Modify the array's contents, no reassignment 
arr.push(4); 
console.log(arr); 

// Modify object's contents, no reassignment 
obj.job = "Robot Master"; 
console.log(obj); 