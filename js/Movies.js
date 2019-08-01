
//returns the an arrat

function returnMoviesList(){ 
    var movies = [
        {
            'Title': 'Avengers: Endgame',
            'Age Rating': '12A', 
            'link': '"./endgame.html"',
            'synopsis': 'This is the synopsis of the movie', 
            'briefSynopsis' : 'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos.', //used on home page
            'imagePath': '../media/posters/Endgame-movie-poster.jpg'
        }, 
        {
            'Title': 'Spiderman: Far From Home', 
            'Age Rating': '12A',
            'synposis': '', 
            'briefSynopsis' : '', // only used on home page
            'imagePath': '../media/posters/spiderman.jpeg'
        },
        {
            'Title': 'The Lion King', 
            'Age Rating': '12A',
            'synposis': '', 
            'briefSynopsis' : '', // only used on home page
            'imagePath': ''           
        },
        {
            'Title': 'Alladin', 
            'Age Rating': '12A',
            'synposis': '', 
            'briefSynopsis' : '', // only used on home page
            'imagePath': ''           
        },
        {
            'Title': 'Us',
            'Age Rating': '12A',
            
            'synposis': '', 
            'briefSynopsis' : '', // only used on home page
            'imagePath': '' 
        },
        {
            'Title': 'Fast & Furious Presents: Hobbs & Shaw',
            'Age Rating': '12A',
            'synposis': '', 
            'briefSynopsis' : '', // only used on home page
            'imagePath': '' 
        }
    ]

    return movies;
}