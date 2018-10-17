// Fetch Data from my own site 
fetch("https://api.github.com/users/akmadsen")
    .then(function (response) {
        return response.json(); 
    })
    .then(function(data) {
        console.log(data); 
    });