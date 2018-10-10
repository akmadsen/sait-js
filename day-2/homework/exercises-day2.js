'use strict';


// Create an index.html page and add an external link to this .js file.
document.write("Successfully Linked Problem Set 2");

// Open up index.html in the browser. If you see "Successfully Linked Problem Set 2" on your page, you may continue.

//1. Create an array `numbers` that contains the first 10 decimals of Pi
//(e.g., 1415926535).
//console.log the array
let numbers = [1,4,1,5,9,2,6,5,3,5]; 

console.log(numbers); 

//2. Use bracket notation to change the `4` in the array to a `4.2`.
//console.log the updated array
numbers[1] = 4.2; 
console.log(numbers); 


//3. Add the number 3 to the end of the array.
//console.log the updated array
numbers.push(3); 
console.log(numbers); 

//4. Create a function named `sumOfArray` that loops through an array, and returns the sum of all the numbers that are less than or equal to 5
function sumOfArray(numbers) { 
    let result = 0; 
    for(let i = 0; i < numbers.length; i++) { 
        if(numbers[i] <= 5) { 
            result += numbers[i]; 
        }
    }
    return result; 
}

/* You can use these to test your function: */

console.log(sumOfArray([1, 4, 1, 5, 5, 5]) === 21 ? "Test 1 Passed" : "Test 1 Failed"); // 21
console.log(sumOfArray([3, 1, 2, 5, 9.9, 5, 11, 2, 7, 3, 0, 9, 3, 4, 8, 5]) === 33 ? "Test 2 Passed" : "Test 2 Failed"); // 33
console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === 15 ? "Test 3 Passed" : "Test 3 Failed"); // 15


//5. Create a variable `rect` that represents a rectangle. This should be an Object with properties:
//  `x` (coordinate) of 30, `y` of 50, `width` of 100, `height` of 50
//console.log the rectangle object
let rect = { 
    x: 30, 
    y: 50, 
    width: 100,
    height: 50 
}

console.log(rect); 


//6. console.log the x- and y- coordinates of the rectangle (its location). Your output should have the format `"X, Y"`.

console.log("\"" + rect.x + ", " + rect.y + "\""); 


//7. Set the rectangle's height to be the square root of its width. Use Math.sqrt()
//Use *dot notation* to access the properties!

rect.height = Math.sqrt(rect.width); 
console.log(rect); 

//8. console.log the rectangle's area (width * height). Use *dot notation* to access the properties!
console.log("Area: " + (rect.width * rect.height)); 

//9. Create a variable `circle` that represents a circle. This should be an object
//with properties
//  `cx` (center-x-coordinate) of 34, 
//  `cy` of 43, and
//  `radius` equal to the LAST value in the (sorted) `numbers` array.
//console.log the circle

let temp = numbers.slice(0); // Deep copy of numbers array.. Kinda Hacky. 
temp.sort(); 

let circle = { 
    cx: 34, 
    cy: 43, 
    radius: temp[temp.length - 1]
}

console.log(circle); 

//10. Create an array `shapes` that represents a list of shapes. The array should contain the rectangle and the circle objects defined above.
//console.log the variable. Be sure to inspect it in the developer console!

let shapes = { 
    rect, 
    circle 
}

console.log(shapes); 

//11. Add a new object to the `shapes` array representing a right triangle.
//The triangle should have a `base` of 33 and a `height` of 44.
//console.log the updated shapes array
shapes.rightTriangle = { 
    base: 33, 
    height: 44
}

console.log(shapes); 

//12. Calculate the hypotenuse of the triangle and assign the value to a 'hypotenuse' property inside the triangle object
//console.log the `shapes` array again.

// hypotenuse = the square root of (a^2 + b^2)
// use the Math.sqrt() function and the .pow() function
function calculateHypotenuse(rightTriangle) { 
    return Math.sqrt(Math.pow(rightTriangle.base, 2) + Math.pow(rightTriangle.height, 2)); 
}

shapes.rightTriangle.hypotenuse = calculateHypotenuse(shapes.rightTriangle); 
console.log(shapes); 