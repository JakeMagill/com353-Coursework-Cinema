
//The purpose of this file is to hold all of the JS relating to the home page

function renderMovieCards() {
    var html = "";
    var movieCardsDiv = document.getElementById("movieCards"); //gets the id of the div which will hold the content
    var allMovies = getMovieCardDetails(); //calls function from home.js (see below)

    if (allMovies.length > 0) {
        allMovies.array.forEach(element => {
            html += '<div class="col-lg-4 col-md-6 mb-4">' +
                        '<div class="card h-100">' +
                            '<a href="#">' +
                                '<img class="card-img-top" src="http://placehold.it/700x400" alt="">' +
                            '</a>' +
                            '<div class="card-body">' +
                                '<h4 class="card-title">' +
                                    '<a href="#">Item Six</a>' +
                                '</h4>' +
                                '<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>' +
                            '</div>' +
                        '</div>' +
                    '</div>'
        });
    }

}

function getMovieCardDetails() {
    var movieDetails = [
        {
            
        }
    ]
}