let bestGames = [ "Valkyria Chronicles", "XCOM: Enemy Within", "Metal Gear Solid 3", "Devil May Cry 3", "Xenogears"]; 

function placeSuffix(num) { 
    let suffix = "th"; 

    switch(num) { 
        case 1: 
            suffix = "st"; 
            break; 
        case 2: 
            suffix = "nd"; 
            break; 
        case 3: 
            suffix = "rd"; 
            break; 
    }
    
    return num + suffix; 
}

function writeBestGames() { 
    document.write("<h2>Best Games List</h2>"); 

    for(let i = 0; i < bestGames.length; i++) { 
        document.write("<p>My " + placeSuffix(i + 1) + " Favourite Game is " + bestGames[i] + ".</p>");
    }
}

writeBestGames(); 