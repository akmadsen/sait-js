// Grab Items we want to Manipulate 
let submitBtn = document.getElementById('submitBtn');
let errorName = document.getElementById('errorName');
let errorAge = document.getElementById('errorAge');
let errorYoung = document.getElementById('errorYoung');
let errorAgeInvalid = document.getElementById('errorAgeInvalid');

submitBtn.addEventListener('click', function (event) {
    let name = document.form1.txtName.value;
    let age = document.form1.txtAge.value;

    // Initialize Error Displays 
    errorName.style.display = "none";
    errorAge.style.display = "none";
    errorYoung.style.display = "none";
    errorAgeInvalid.style.display = "none";

    if (!name) {
        event.preventDefault();
        errorName.style.display = "block";
    }

    if (!age) {
        event.preventDefault();
        errorAge.style.display = "block";
    }

    age  = parseInt(age); 

    if (isNaN(parseInt(age))) { 
        event.preventDefault();
        errorAgeInvalid.style.display = "block";
    }

    if (!isNaN(parseInt(age)) && parseInt(age) < 18) {
        event.preventDefault();
        errorYoung.style.display = "block";
    }
});