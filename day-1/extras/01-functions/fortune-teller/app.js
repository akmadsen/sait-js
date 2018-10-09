function tellFortune(children, partner, geoLocation, job) {
    let result = ""; 
    result += "<p>You will have " + children + " children.</p>";
    result += "<br/>";
    result += "<p>Your partner will be " + partner + ".</p>";
    result += "<br/>";
    result += "<p>Your living place will be " + geoLocation + ".</p>";
    result += "<br/>";
    result += "<p>You will work as a " + job + ".</p>";
    result += "<br/>";
    return result;
}

document.write("<h2>Fortune 1</h2>");
document.write(
    tellFortune(4, "Lando Calrissian", "Sky City", "Traitor")
);

document.write("<h2>Fortune 2</h2>");
document.write(
    tellFortune(0, "Batman", "Gotham", "Penguin Henchman")
);

document.write("<h2>Fortune 3</h2>");
document.write(
    tellFortune(2, "Logen Ninefingers", "Far Country", "Farmer")
);