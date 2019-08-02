
//This file holds all of the functions used on the movie listing page

//Renders a list of divs containing information about films and links to a specific movie page
function renderMovieListings(movieList){
    var html = "";
    var movieListDiv = document.getElementById("movieContainer"); //gets the id of the div which will hold the content
    var allMovies = movieList; //calls function from custom.js
  
    if (allMovies.length > 0){
        allMovies.forEach(element => { // iterates through objects in allMovies variable
            html += '<div class="row border my-3 border-0">' + // each iteration will built the following html and add it to the html variable,
                        '<div class="col-md-4 col-sm-0">' + 
                            '<a href=' + checkLink(element.link) + '>' + 
                                '<img src="' + checkImagePath(element.imagePath) + '" alt="" height="275px" width="200px" class="my-3 movie-image">' +
                           '</a>' + 
                       '</div>' +
                       '<div class="col-md-8 col-sm-12">' +
                           '<h3 class="py-3"><u>' + element.Title + '</u></h3>' +
                           '<p>' + checkSynopsis(element.synopsis) + '</p>' + //calls custom.js to ensure value isn't undefinedso user doesn't see undefined
                           '<p>' + checkRating(element.ageRating) + '</p>' +
                           '<a href=' + checkLink(element.link) + '>' +
                                '<button class="btn btn-primary">More Info</button>' +
                           '</a>' +
                       '</div>' + 
                   '</div>' + 
                   '<hr />'
        });
    }
    else{ // if there are no items in allMovies show the following message
        html = '<div class="row pt-2  my-3">' +
                    '<p> Sorry there are currently no films being shown at this time, please check back later </p>' +
                '</div>'
    }
    movieListDiv.innerHTML = html; 
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

//checks of the object link exist, if not returns # so that the user cannot leave the page and hit a 404
function checkLink(link){
    if(link === undefined){
        return '#';
    }
    return link;
}

function checkImagePath(path){
    if(path === undefined){
        return '#';
    }
    return path;
}
