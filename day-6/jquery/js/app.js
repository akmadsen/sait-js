// Backup (if CDN is down, use local)
window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>'); 

// Wait for the DOM to be loaded (not an all the time thing - can bog down pages)
$(document).ready(function() {
// $(function() { // Alt form

    // Selecting 
    let links = $('a'); 
    console.log(links);
    
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

}); 