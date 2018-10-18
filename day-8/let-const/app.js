const FUNCS = [];

for (let i = 0; i < 3; i++) { 
    FUNCS.push(function() {
        console.log(i); 
    });
}

for (let j = 0; j < FUNCS.length; j++) { 
    FUNCS[j](); 
}