fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        // Data is not actually returned 
        // the json function will return parsed, usable json
        // but this will be another promise
        return response.json();
    }).then(function (data) {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name + " + " + data[i].username);
        }
    });

// Using Fetch API to send data 
// 1) Create content you want to send 
let user = {
    username: "akmadsen",
    id: 505167
}

// 2) Fetch the URL 
fetch("https://jsonplaceholder.typicode.com/users/", {
        // Set method 
        method: "POST",

        // Set headers 
        headers: {
            "Content-Type": "application/json"
        },

        // Set data 
        body: JSON.stringify(user)
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

// Error Handling with Fetch API
fetch("https://jsonplaceholder.typicode.com/404")
    .then(function (response) {
        if(!response.ok) { 
            throw Error(response.status); 
        }

        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log("The Error:", error); 
    });