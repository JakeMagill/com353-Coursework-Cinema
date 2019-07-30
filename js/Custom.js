//The purpose of this file is to hold any JS functions which do not belong in other JS files and do not warrent their own files.

function showTimeAndDate() {
    var date = new Date()
    var dateUTC = date.toUTCString();// changing the display to UTC string
    document.getElementById('datetime').innerHTML = dateUTC;
    tt=dateTimeRefresh();
}

// refreshes the date time ecery second so it looks like it is couting up
function dateTimeRefresh(){
    var refresh=1000; // Refresh rate in milli seconds = 1 second
    mytime=setTimeout('dateTimeRefresh()',refresh)
}