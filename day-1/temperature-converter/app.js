let celsiusBase = -273.15; 

function convertCelsiusToFahrenheit(celsius) { 
    return (celsius * (9 / 5)) + 32; 
}

function convertFahrenheitToCelsius(fahrenheit) { 
    return (fahrenheit - 32) * (5 / 9); 
}

let fahrenheitConversion = convertCelsiusToFahrenheit(celsiusBase); 
let celsiusConversion = convertFahrenheitToCelsius(fahrenheitConversion); 

document.write("<h1>Temperature Converter</h1>"); 
document.write("<p>" + celsiusBase + "&deg;C is " + fahrenheitConversion + "&deg;F"); 
document.write("<p>" + fahrenheitConversion + "&deg;F is " + celsiusConversion + "&deg;C"); 


