fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response) {
    // Data is not actually returned 
    // the json function will return parsed, usable json
    // but this will be another promise
    return response.json(); 
}).then(function(data) { 
    console.log(data); 

    for(let i = 0; i < data.length; i++) { 
        console.log(data[i].name + " + " + data[i].username); 
    }
}); 