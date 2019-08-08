
//The purpose of this file is to hold all of the JS relating to the home page

function renderMovieCards(movies) {
    var html = "";
    var movieCardsDiv = document.getElementById("movieCards"); //gets the id of the div which will hold the content
    
    if (movies.length > 0) {
        movies.forEach(element => {
            html += '<div class="col-lg-4 col-md-6 mb-4">' +
                        '<div class="card h-100">' +
                            '<a href=' + checkPagePath(element.link)+ '>' +
                                '<img class="card-img-top" src="' + checkImagePath(element.imagePath) + '"alt="">' +
                            '</a>' +
                            '<div class="card-body">' +
                                '<h4 class="card-title">' +
                                    '<a href=' + checkPagePath(element.link) + '>' + element.Title + '</a>' +
                                '</h4>' +
                                '<p class="card-text">' + checkSynopsis(element.synopsis) + '</p>' +
                            '</div>' +
                        '</div>' +
                    '</div>'
        });
    }

    movieCardsDiv.innerHTML = html;
}

function renderRecentlyViewed(cookieArray, movies){

    if (cookieArray != undefined){

        var cookieMovies = JSON.parse(cookieArray);
        var html = '<h3 class="pt-5 row"><u>Recently Viewed</u></h3><br/>';
        var recentlyViewedDiv = document.getElementById("recentlyViewed");
    
        cookieMovies.forEach(cookieMovie => {
            movies.forEach(movie => {
                if (movie.Title === cookieMovie){
                    html += '<div class="col-lg-4 col-md-6 mb-4">' +
                    '<div class="card h-100">' +
                    '<a href=' + checkPagePath(movie.link)+ '>' +
                        '<img class="card-img-top" src="' + checkImagePath(movie.imagePath) + '"alt="">' +
                    '</a>' +
                    '<div class="card-body">' +
                        '<h4 class="card-title">' +
                            '<a href=' + checkPagePath(movie.pagePath) + '>' + movie.Title + '</a>' +
                        '</h4>' +
                        '<p class="card-text">' + checkSynopsis(movie.synopsis) + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>'
            }
        });
    });
        
    createCookie('cinemaTicketCookie', JSON.stringify(cookieMovies),1);
    recentlyViewedDiv.innerHTML = html;
    }
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