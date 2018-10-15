// Gather the answers from the form. 
const QUIZ = document.quiz; 

const Q1_ID = 'pluto'; 
const Q2_ID = 'platypus'; 
const Q3_ID = 'hyena'; 
const Q4_ID = 'stegosaurus'; 
const Q5_ID = 'sport'; 
const SUBMIT_ID = 'submit-button'; 

const Q1_QUESTION = document.quiz[Q1_ID]; 
const Q2_QUESTION = document.quiz[Q2_ID]; 
const Q3_QUESTION = document.quiz[Q3_ID]; 
const Q4_QUESTION = document.quiz[Q4_ID]; 
const Q5_QUESTION = document.quiz[Q5_ID]; 

const SUBMIT_BUTTON = document.getElementById('submit-button'); 

console.log(Q1_QUESTION); 
console.log(Q2_QUESTION); 
console.log(Q3_QUESTION); 
console.log(Q4_QUESTION); 
console.log(Q5_QUESTION); 


// Function Definitions 
function checkCheckboxValid() {
    for(let i = 0; i < Q5_QUESTION.length; i++) { 
        // If we have a checked box, we can return true. 
        if (Q5_QUESTION[i].checked) {
            return true; 
        }
    }
    return false; 
}

function evaluateQuiz() { 
    console.log("TODO: Evaluate the Quiz"); 
    return []; 
}

function showGrade(testResults) { 
    console.log("TODO: Show the Grade"); 
}

// Form Submit Action 
SUBMIT_BUTTON.addEventListener('click', function(event) { 
  
    QUIZ.checkValidity(); 
    let isValid = QUIZ.reportValidity(); 
    let isCheckboxesValid = checkCheckboxValid(); 
z
    console.log("CHECKBOX VALID: " + isCheckboxesValid); 

    event.preventDefault(); 

    if (isValid && isCheckboxesValid) { 
        let testResults = evaluateQuiz(); 
        showGrade(testResults); 
    }
});