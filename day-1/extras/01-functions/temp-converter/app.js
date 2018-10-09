function celsiusToFahrenheit(temp) {
    return (temp * (9 / 5)) + 32; 
}

function fahrenheitToCelsius(temp) { 
    return (temp - 32) * (5 / 9); 
}

function writeTest(num, temp) { 
    document.write("<h2>Test " + num + ": " + temp + "&deg;C</h2>"); 
    let fahr = celsiusToFahrenheit(temp); 
    let cels = fahrenheitToCelsius(fahr); 

    document.write("<p>Celsius To Fahrenheit: " + fahr + "</p>"); 
    document.write("Fahrenheit to Celsius: " + cels + "</p>");
    document.write("<br/>");  
}

let tests = [-276.15, -30, -20, 0 , 10, 20, 50, 9001]; 

for(let i = 0; i < tests.length; i++) { 
    writeTest(i + 1, tests[i]); 
}