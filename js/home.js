
//The purpose of this file is to hold all of the JS relating to the home page

function renderMovieCards() {
    var html = "";
    var movieCardsDiv = document.getElementById("movieCards"); //gets the id of the div which will hold the content
    var allMovies = getMovieCardDetails(); //calls function from home.js (see below)

    if (allMovies.length > 0) {
        allMovies.forEach(element => {
            html += '<div class="col-lg-4 col-md-6 mb-4">' +
                        '<div class="card h-100">' +
                            '<a href=' + checkPagePath(element.pagePath)+ '>' +
                                '<img class="card-img-top" src="' + checkImagePath(element.imagePath) + '"alt="">' +
                            '</a>' +
                            '<div class="card-body">' +
                                '<h4 class="card-title">' +
                                    '<a href=' + checkPagePath(element.pagePath) + '>' + element.name + '</a>' +
                                '</h4>' +
                                '<p class="card-text">' + checkSynopsis(element.briefSynopsis) + '</p>' +
                            '</div>' +
                        '</div>' +
                    '</div>'
        });
    }

    movieCardsDiv.innerHTML = html;
}

function getMovieCardDetails() {
    var movieDetails = [
        {
            'name': 'Avnengers: Endgame', 
            'briefSynopsis' : 'Blah blah blah', 
            'imagePath': '../media/posters/Endgame-movie-poster.jpg',
            'pagePath' : '"../markup/movie pages/endgame.html"',
        }
    ]

    return movieDetails;
}

function checkSynopsis(synopsis){
    if(synopsis === undefined){
        return 'there is no synopsis available for this film at this time';
    }
    return synopsis;
}

function checkImagePath(path){
    if(path === undefined){
        return '#';
    }
    return path;
}

function checkPagePath(pagePath){
    if(pagePath === undefined){
        return '#';
    }
    return pagePath;
}