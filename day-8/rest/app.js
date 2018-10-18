const product = (...nums) => nums.reduce((product, num) => product * num, 1);

console.log(product(3, 4, 5)); // 60
console.log(product(3, 4, 5, 6)); // 360
console.log(product(1, 2, 3, 4, 5, 6)); // 720