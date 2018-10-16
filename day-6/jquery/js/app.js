// Backup (if CDN is down, use local)
window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>'); 

// Wait for the DOM to be loaded (not an all the time thing - can bog down pages)
$(document).ready(function() {
// $(function() { // Alt form

    // Selecting 
    let links = $('a'); 
    
    // Changing CSS
    let google = $('#google a'); 
    let yahoo = $('#yahoo').find('a'); 
    
    
    google.html('Microsoft Bing');
    google.attr('href', 'https://www.bing.com'); 
    google.css('color', 'green'); 
    
    yahoo.html('Duck Duck Go'); 
    yahoo.attr('href', 'https://www.duckduckgo.com'); 
    yahoo.css({
        'color': 'orange',
        'background-color': 'rebeccapurple'
    }); 
    
    // Looping with JQuery 
    let navLinks = $('nav a'); 
    
    navLinks.each(function() { 
        let link = $(this); 
        
        link.text(link.text() + "!"); 
        link.attr('href', 'http://worstsearch.com/'); 
        link.css({
            "background-color": "yellowgreen", 
            "text-decoration": "none" 
        }); 
    }); 

    // Events with jQuery 
    $('#learn-button').on('click', function(event) {
        console.log(event); 
        console.log(event.which); 
        console.log(event.target); 
        console.log('clicked!'); 
    });

    $('body').on('keypress', function(event) {
        console.log(event); // Event Obj
        console.log(event.which); // Which value for event 
        console.log(event.target); // element clicked    
    });

}); 