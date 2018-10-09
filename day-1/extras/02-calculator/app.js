function squareNumber(num) { 
    let result = num * num; 
    console.log("The result of squaring the number " + num + " is " + result); 
    return result; 
}

function halfNumber(num) { 
    let result = num / 2; 
    console.log("Half of " + num + " is " + result + "."); 
    return result;
}

function percentOf(numerator, denominator) { 
    let result = (numerator / denominator) * 100; 
    console.log(numerator + " is " + result + "% of " + denominator + "."); 
    return result; 
}

function areaOfCircle(radius) { 
    let result = (Math.PI * radius * radius).toFixed(2); 
    console.log("The area of a circle with radius " + radius + " is " + result + ".");
    return result; 
}

function aggregate(num) { 
    let result = []; 
    result.push(halfNumber(num));
    result.push(squareNumber(result[0])); 
    result.push(areaOfCircle(result[1])); 
    result.push(percentOf(result[2], (result[2] * result[2])));
    return result;  
}

