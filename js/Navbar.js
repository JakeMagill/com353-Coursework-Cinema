function renderNavbar(movies){
    var html = "";
    var navbarDiv = document.getElementById('navbarDiv')

    if (navbarDiv != null){
        html += '<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">' +
                    '<div class="container">' +
                        '<a class="navbar-brand" href="./index.html">Cinema</a>' +
                        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">' +
                            '<span class="navbar-toggler-icon"></span>' +
                        '</button>' +
                        '<div class="collapse navbar-collapse" id="navbarResponsive">' +
                        '<ul class="navbar-nav ml-auto">' +
                            '<li class="nav-item">' +
                                '<a class="nav-link" href="./index.html">' +
                                    'Home' +
                                    '<span class="sr-only">(current)</span>' +
                                '</a>' +
                            '</li>' +
                            '<li class="nav-item dropdown">' +
                            '<a class="nav-link dropdown-toggle" href="./listings.html" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">' +
                              'Movies' +
                            '</a>' +
                            '<div class="dropdown-menu" id="moviesDropdown" aria-labelledby="navbarDropdownMenuLink">' +
                              renderNavMoviesDropdown(movies) +
                            '</div>' +
                            '</li>' +
                            '<li class="nav-item">' +
                                '<a class="nav-link" href="./locations.html">Locations</a>' +
                            '</li>' +
                            '<li class="nav-item">' +
                                '<a class="nav-link" href="./PricingInfo.html">Pricing</a>' +
                            '</li>' +
                            '<li class="nav-item">' +
                                '<a class="nav-link" href="./contactForm.html">Contact</a>' +
                            '</li>' +
                        '</ul>' +
                    '</div>' +
                '</div>' +
            '</nav>'

        navbarDiv.innerHTML = html;
    }
}

//renders a dropdown option for each of the movie in the movies.js file
function renderNavMoviesDropdown(movies){
    var html = '';

    movies.forEach(movie => {
        html += '<a class="dropdown-item" href=' + checkLink(movie.link) + '>' + movie.Title + '</a>'
    });

    return html;
}

//checks of the object link exist, if not returns # so that the user cannot leave the page and hit a 404
function checkLink(link){
    if(link === undefined){
        return '#';
    }
    return link;
}