function returnMovies(){
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

function checkSynopsis(synopsis){
    if(synopsis === undefined){
        return 'there is no synopsis available for this film at this time';
    }
    return synopsis;
}

function checkRating(ageRating){
    if(ageRating === undefined){
        return 'This film has not yet been classifed, check back again later'
    }
    return ageRating;
}
