$(document).ready(function () {

    let counter = 0; 
    let counterDisplay = $('#counter-display'); 
    counterDisplay.hide(); 

    $('#error').hide(); 

    let colours = ['coral', 'orangered', 'papayawhip', 'lightgreen']; 

    $('#random-button').click(function() {
        counterDisplay.text(++counter); 

        if (counterDisplay.is(':hidden')) { 
            counterDisplay.fadeIn(); 
        }

        let randomColour = Math.floor(Math.random() * colours.length); 
        $('body').css({
            'background-color': colours[randomColour]
        });
    }); 

    function isFormValid() { 
        let form = document.forms[0]; 

        let firstEmpty = form['first-name'].value === ''; 
        let lastEmpty = form['last-name'].value === ''; 

        return !(firstEmpty || lastEmpty);  
    }

    $('#submit-button').click(function(event) {

        event.preventDefault(); 
      
        // Custom Validation
        if($('#error').is(':hidden') && !isFormValid()) { 
            $('#error').fadeIn(1000); 
            return; 
        } 
        
        if (isFormValid()) { 
            $('form').submit(); 
        }
    }); 


});