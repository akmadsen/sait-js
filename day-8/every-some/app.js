const availableLaptops = [
    { name: 'MacBook', RAM: 8 },
    { name: 'Asus', RAM: 32 },
    { name: 'Lenovo', RAM: 16 },
    { name: 'HP', RAM: 4 }
    ];

// your code here
const all16GB = availableLaptops.every(laptop => laptop.RAM >= 16); 
console.log("All laptops RAM > 16GB?: " + all16GB); 

const some16GB = availableLaptops.some(laptop => laptop.RAM >= 16); 
console.log("Some laptops RAM > 16GB?: " + some16GB); 
