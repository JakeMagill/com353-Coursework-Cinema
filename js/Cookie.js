
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

function deleteCookie(cookieName){
    document.cookie = cookieName + '=' ; +  'expires = Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // set the value of the cookie to nothing and the expiry dat in the past to delete the cookie
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

function addRecentlyViewed(movieName){

    var cookieName = 'cinemaTicketCookie';
    deleteCookie(cookieName);
    if(getCookie(cookieName) === null || getCookie(cookieName === undefined)){ //creates a new cookie if none exists

        var recentMovies = [];
        var recentMoviesArr = JSON.stringify(recentMovies);
        createCookie("cinemaTicketCookie", recentMoviesArr, 1); // creates cookie

     } 
    var storedRecentMoves = JSON.parse(getCookie(cookieName)); // deserialises JSON to retrive array within the cookie
        
    if(storedRecentMoves.length == 3){ // if the array has three values
        storedRecentMoves.pop(); // remove the last value
    }

    storedRecentMoves.unshift(movieName); // add the current movie to the start of the array
    storedRecentMoves = JSON.stringify(storedRecentMoves); // re-serialise the array into JSON
    deleteCookie(cookieName, storedRecentMoves); // remove the current cookie as they cannot be amended
    createCookie(cookieName, storedRecentMoves, 1); // create a new cookie with the new array values
}