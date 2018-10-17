// Set Data
localStorage.setItem("username", "Janessa"); 
localStorage.firstName = "Janessa"; 
localStorage["favourite number"] = 64; 

// Get Data
console.log(localStorage.getItem("username")); 
console.log(localStorage.firstName); 
console.log(localStorage["favourite number"]); 
console.log(typeof localStorage["favourite number"]); 

// Delete Data 
localStorage.removeItem("username"); 
localStorage.firstName = null; // NOT the same as removing 

console.log(localStorage.username); 
console.log(localStorage.firstName); 

localStorage.clear(); 

console.log(localStorage.username); 
console.log(localStorage.firstName); 
console.log(localStorage["favourite number"]); 