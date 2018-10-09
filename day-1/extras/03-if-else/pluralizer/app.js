function pluralize(word) { 
    switch (word) { 
        case "person": 
            return "people"; 
        case "goose": 
            return "geese"; 
        case "moose": 
            return "moose"; 
        default: 
            return word + "s"; 
    }
}

function writeTest(num, word) { 
    document.write("<h2>Test #" + num + ": " + word + "</h2>");
    document.write("<p>" + pluralize(word) + "</p>"); 
}

let tests = ["person", "duck", "goose", "pig", "horse", "moose"]; 

for (let i = 0; i < tests.length; i++) { 
    writeTest(i + 1, tests[i]); 
}