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

const Q5_ERROR = document.getElementById('q5-error'); 
const RESULT_CARD = document.getElementById('result'); 
const MARK_DISPLAY = document.getElementById('mark-display'); 

const SUBMIT_BUTTON = document.getElementById('submit-button'); 


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

function showCheckboxError() { 
    if(Q5_ERROR.classList.contains("hidden")){
        Q5_ERROR.classList.remove("hidden"); 
    }
}

function hideCheckboxError() { 
    if(!Q5_ERROR.classList.contains("hidden")) { 
        Q5_ERROR.classList.add("hidden"); 
    }
}

function evaluateQ1() { 
    return Q1_QUESTION.value === "no"; 
}

function evaluateQ2() { 
    return Q2_QUESTION.value === "true"; 
}

function evaluateQ3() { 
    return Q3_QUESTION.value === "other";
}

function evaluateQ4() { 
    return Q4_QUESTION.value.toLowerCase().trim() === "stegosaurus";
}

function evaluateQ5() { 
    let result = true; 

    result = result && Q5_QUESTION[0].checked === false; 
    result = result && Q5_QUESTION[1].checked === true; 
    result = result && Q5_QUESTION[2].checked === false; 
    result = result && Q5_QUESTION[3].checked === true; 

    return result;
}

function evaluateQuiz() { 
    return [
        evaluateQ1(), 
        evaluateQ2(), 
        evaluateQ3(), 
        evaluateQ4(), 
        evaluateQ5()
    ]; 
}

function showGrade(testResults) { 
    let correct = testResults.filter(result => result === true).length; 
    let total = testResults.length; 
    let percent = Math.round(correct / total * 100); 

    console.log(correct); 
    console.log(total); 
    console.log(percent); 

    MARK_DISPLAY.innerText = correct + " / " + total + " = " + percent + "%"; 

    RESULT_CARD.classList.remove("hidden"); 
}

// Form Submit Action 
SUBMIT_BUTTON.addEventListener('click', function(event) { 
  
    QUIZ.checkValidity(); 
    let isValid = QUIZ.reportValidity(); 
    let isCheckboxesValid = checkCheckboxValid(); 

    event.preventDefault(); 

    if (!isCheckboxesValid) { 
        showCheckboxError(); 
    } else {
        hideCheckboxError(); 
    }

    if (isValid && isCheckboxesValid) { 
        let testResults = evaluateQuiz(); 
        showGrade(testResults); 
    }
});