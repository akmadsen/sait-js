function assignGrade(mark) { 
    if (mark >= 95) { 
        return "A"; 
    } else if (mark >= 85) { 
        return "B"; 
    } else if (mark >= 75) {
        return "C"; 
    } else if (mark >= 50) { 
        return "D"; 
    } else { 
        return "F"; 
    }
}

function writeTest(num, mark) { 
    document.write("<h2>Test #" + num + ": " + mark + "</h2>");
    document.write("<p>" + assignGrade(mark) + "</p>"); 
}

let tests = []; 
let i = 0; 
while(i <= 100) {
    tests.push(i); 
    i += 5; 
}

for(i = 0; i < tests.length; i++) { 
    writeTest(i + 1, tests[i]); 
}