document.write("<h2>Even Odd Reporter</h2>"); 

for(let i = 0; i <= 20; i++) { 
    if (i % 2 === 0) { 
        document.write("<p>" + i + " is even.</p>"); 
    } else { 
        document.write("<p>" + i + " is odd.</p>"); 
    }
}



document.write("<h2>Multiplication Tables</h2>"); 

document.write("<h3>For 9 Only</h3>"); 

for(let i = 1; i <= 10; i++) { 
    document.write("<p>9 x " + i + " = " + (9 * i) + "</p>");
}

document.write("<h3>For 1 to 10 Only</h3>"); 

for(let i = 1; i <= 10; i++) { 
    for(let j = 1; j <= 10; j++) { 
        document.write("<p>" + i + " x " + j + " = " + (i * j) + "</p>");
    }
}


document.write("<h2>The Grade Assigner</h2>"); 

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

for(let i = 60; i <= 100; i++) { 
    let grade = assignGrade(i); 
    let prefix = (grade === "A" || grade ==="F") ? "an " : "a "; 
    document.write("<p>For " + i + " you got " + prefix + assignGrade(i) + "</p>");
}