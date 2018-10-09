function helloWorld(region) { 
    switch (region) { 
        case "es":
            return "¡Hola Mundo!"; 
        case "de":
            return "Hallo Welt!";
        case "zh": 
            return "你好，世界!";
        default: 
            return "Hello, World!"; 
    }
}

function writeTest(num, region) { 
    document.write("<h2>Test #" + num + ": " + region + "</h2>"); 
    document.write("<p>" + helloWorld(region) + "</p>")
}

let tests = ["", "en", "es", "de", "zh"]; 

for(let i = 0; i < tests.length; i++) { 
    writeTest(i + i, tests[i]); 
}