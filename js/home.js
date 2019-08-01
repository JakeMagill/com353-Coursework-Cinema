
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

function renderRecentlyViewed(cookieArray){

    if (cookieArray != undefined){

        var movies = getMovieCardDetails();
        var cookieMovies = JSON.parse(cookieArray);
        var html = '<h3 class="pt-5"><u>Recently Viewed</u></h3><br/>';
        var recentlyViewedDiv = document.getElementById("recentlyViewed");
    
        cookieMovies.forEach(cookieMovie => {
            movies.forEach(movie => {
                if (movie.name = cookieMovie){
                    html += '<div class="col-lg-4 col-md-6 mb-4">' +
                    '<div class="card h-100">' +
                    '<a href=' + checkPagePath(movie.pagePath)+ '>' +
                        '<img class="card-img-top" src="' + checkImagePath(movie.imagePath) + '"alt="">' +
                    '</a>' +
                    '<div class="card-body">' +
                        '<h4 class="card-title">' +
                            '<a href=' + checkPagePath(movie.pagePath) + '>' + movie.name + '</a>' +
                        '</h4>' +
                        '<p class="card-text">' + checkSynopsis(movie.briefSynopsis) + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>'
            }
        });
    });
        
    recentlyViewedDiv.innerHTML = html;
    }
}

function getMovieCardDetails() {
    var movieDetails = [
        {
            'name': 'Avengers: Endgame', 
            'briefSynopsis' : 'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos.',
            'imagePath': '../media/posters/Endgame-movie-poster.jpg',
            'pagePath' : '"../markup/movie pages/endgame.html"',
        }, 
        {
            'name': 'Spiderman: Far From Home', 
            'briefSynopsis' : 'Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.', 
            'imagePath': '../media/posters/spiderman.jpeg',
            'pagePath' : '"../markup/movie pages/spiderman.html"',
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