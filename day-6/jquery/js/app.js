// Backup 
window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>'); 

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
links.each(function() { 
    let link = $(this); 

    link.text(link.text() + "!"); 
    link.css({
        "background-color": "yellowgreen", 
        "text-decoration": "none" 
    }); 
}); 