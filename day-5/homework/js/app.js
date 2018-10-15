// Gather the answers from the form. 
let plutoAnswer = document.quiz['pluto']; 
let quiz = document.quiz; 

let submitButton = document.getElementById('submit-button'); 

submitButton.addEventListener('click', function(event) { 
  
    quiz.checkValidity(); 
    quiz.reportValidity(); 

    event.preventDefault(); 
    console.log("We got here"); 
});