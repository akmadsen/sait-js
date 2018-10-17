if (!localStorage.name) {
    let name = prompt("What is your name?");
    localStorage.name = name;
}

let h1 = document.createElement("h1");
let text = document.createTextNode("Hello, " + localStorage.name);
h1.appendChild(text);
document.body.appendChild(h1);