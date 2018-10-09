function calcCircumference(radius) { 
    return 2 * Math.PI * radius; 
}

function calcArea(radius) { 
    return Math.PI * radius * radius; 
}

document.write("<h2>Test Example: Radius is 5</h2>"); 

document.write("<p>Circumference: " + calcCircumference(5) + "</p>"); 
document.write("<p>Area: " + calcArea(5) + "</p>"); 
