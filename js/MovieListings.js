
function renderMovieListings(){
    var html = "";
    var movieListDiv = document.getElementById("movieContainer"); //gets the id of the div which will hold the content
    var allMovies = returnMoviesList(); //calls function from custom.js

    if (allMovies.length > 0){
        allMovies.forEach(element => { // iterates through objects in allMovies variable
            html += '<div class="row border my-3">' + // each iteration will built the following html and add it to the html variable,
                        '<div class="col-md-4 col-sm-0">' + 
                            '<a href="' + element.link + '">' + 
                                '<img src="../media/posters/Endgame-movie-poster.jpg" alt="" height="200px" width="300px" class="py-3">' +
                           '</a>' + 
                       '</div>' +
                       '<div class="col-md-8 col-sm-12">' +
                           '<h3 class="py-3"><u>' + element.Title + '</u></h3>' +
                           '<p>' + checkSynopsis(element.synopsis) + '</p>' + //calls custom.js to ensure value isn't undefinedso user doesn't see undefined
                           '<p>' + checkRating(element.ageRating) + '</p>' +
                       '</div>' + 
                   '</div>'
        });
    }
    else{ // if there are no items in allMovies show the following message
        html = '<div class="row pt-2  my-3">' +
                    '<p> Sorry there are currently no films being shown at this time, please check back later </p>' +
                '</div>'
    }
    movieListDiv.innerHTML = html;
}   

//creates list of movie objects which will then be returned
function returnMoviesList(){ 
    var movies = [
        {
            'Title': 'Avengers Endgame',
            'Age Rating': '12A', 
            'link': '"../markup/movies/endgame.html"',
            'synopsis': 'This is the synopsis of the movie'
        }, 
        {
            'Title': 'Spiderman: Far From Home', 
            'Age Rating': '12A',
            'synposis': ''
        }
    ]

    return movies;
}

// checks if there is a synopsis in the movie object, if not return message for the user
function checkSynopsis(synopsis){
    if(synopsis === undefined){
        return 'there is no synopsis available for this film at this time';
    }
    return synopsis;
}

// checks if there is an age rating in the movie object, if not return message for the user
function checkRating(ageRating){
    if(ageRating === undefined){
        return 'This film has not yet been classifed, check back again later'
    }
    return ageRating;
}
