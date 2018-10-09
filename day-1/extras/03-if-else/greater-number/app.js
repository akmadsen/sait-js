function greaterNum(a, b) { 
    return a > b ? a : b; 
}

function writeTest(num, pair) { 
    document.write("<h2>Test #" + num + ": [" + pair[0] + ", " + pair[1] + "]</h2>"); 
    document.write("<p>The greater number of " + pair[0] + " and " + pair[1] + " is " + greaterNum(pair[0], pair[1]) + "</p>");
}

let tests = [ 
    [0,1], 
    [3001, 200], 
    [-50, 300], 
    [1000, 1000.000001] 
]; 

for(let i = 0; i < tests.length; i++) {
    writeTest(i + 1, tests[i]); 
}