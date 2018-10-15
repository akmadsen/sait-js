// Experiments in grabbing the actual form 

let testForm = document.getElementById('testFormID'); 

console.log(testForm); 
console.log(document.testForm); 
// Without "Name" set, ID requires ".forms." middleman present 
console.log(document.forms.testForm); 
console.log(document.forms.testFormID); 

// Experiments with Form Items and Values 
//    Values won't be present on console, because grabbing on page load, not submit 
let name = document.testForm["name"]; 
console.log(name); 
console.log(name.value); 

let email = document.testForm.email; 
console.log(email); 
console.log(email.value); 

let nameValue = document.testForm.name.value; 

console.log("EMAIL TYPE: " + email.type); 

let bestGame = document.testForm["best-online-game"]; 
console.log(bestGame); 
let bestGameValue = bestGame.value; 
console.log(bestGameValue); 


// Experiments in Focus 
//    Radio Buttons seem to requre extra effort to focus 
//    Can access items with ID 

testForm[1].focus(); 
// testForm.overwatch.focus(); 
// testForm["password"].focus(); 

// Experiments with Checkboxes 
let monsterCheckboxList = document.testForm.monster; 
console.log(monsterCheckboxList); 

function assessCheckbox() {
    for (let i = 0; i < monsterCheckboxList.length; i++) { 
        if(monsterCheckboxList[i].checked) { 
            console.log("MONSTER CHECKBOX CHECKED: " + monsterCheckboxList[i].value); 
        }
    }
}

assessCheckbox(); 


// Experiments with Submit Interception 

// Disabled for now - Interferes with Required
// let submitButton = document.testForm.submit; 

// function alertName(name) { 
//     alert("Hello, " + (name ? name : "stranger")); 
// }

// submitButton.addEventListener("click", function(event) { 
//     event.preventDefault(); 
//     alertName(name.value); 
// }); 