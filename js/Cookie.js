
//This file holds all of the functions required for Cookies to function properly

// creates cookie on home page
function createCookie(cookieName, cookieValue, cookieExpiryDays) {
    var date = new Date(); // creates new date
    date.setDate(date.getTime() + cookieExpiryDays); // adds days to the date

    var expires = date.toUTCString(); // creates UTC string for the cookie to use
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/"; // sets cookie values
}

// get existing cookie
function getCookie(cookieName) { //takes cookie name as parameter
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie); //Decode the cookie string to handle cookies with special characters
    var ca = decodedCookie.split(';'); // Split document.cookie on semicolons into an array
    for (var i = 0; i < ca.length; i++) { //loop through the array to read each value
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) { // if a cookie existsturn the value of the cookie
            return c.substring(name.length, c.length);
        }
    }
    return null; // returned if no cookie exists
}

function cookiesPolicyBar() {
    // Check cookie
    var cookie = getCookie('cinemaTicketCookie');
    if (cookie == null) { // shows the cookie bar if no cookie currently exists
        $('#cookieAcceptBar').show(); // shows the cookie bae
    }
    else {
        $('#cookieAcceptBar').hide(); // hides the cookie bar
    }
}