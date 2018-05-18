// Week 7 homework - Step 1_2
console.log('------Step 1_2------');

// Ajax function
function getAjaxData(url, callback) {
    // Create new ajax call
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // This in here is our callback function
        // Check server status
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });
    request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });
    // initializes a get request
    request.open("GET", url);
    // Sends the request
    request.send();
}

/* *-*-* OPENING Request *-*-* */
getAjaxData('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json', moviesData => {
    // console.log(moviesData);

    // 1- Give each movie a tag: Good (>=7), Average (4-6), Bad (0-3) based on the ratings.
    const moviesEvaluated = moviesData
        .filter(movie => {
            if (movie.rating >= 7) {
                // console.log('good', movie.rating)
                return movie.evaluation = "Good";
            }
            else if (movie.rating >= 4
                && movie.rating < 7) {
                // console.log('Average', movie)
                return movie.evaluation = "Average";
            }
            else {
                // console.log('Bad', movie)
                return movie.evaluation = "Bad";
            }
        });
    console.log(moviesEvaluated[0].evaluation);


    // 2- Calculate the average rating of all the movies.
    let moviesTotalRating = moviesEvaluated
        .map(movieRating => movieRating.rating)
        .reduce((acc, rating) => {
            return acc + rating;
        });
    // console.log(moviesTotalRating);
    let moviesAverageRating = (moviesTotalRating / moviesEvaluated.length).toFixed(3);
    console.log('The average rating of all movies is ' + moviesAverageRating);

    // 3- Count the total number of Good, Average and Bad movies.
    // GOOD movies number
    let goodMoviesTotal = moviesEvaluated
        .map(movieEval => movieEval.evaluation === 'Good')
        .reduce((acc, goodMovie) => {
            return acc + goodMovie;
        });
    console.log('Total Good movies are: ' + goodMoviesTotal);
    // AVERAGE movies number
    let averageMoviesTotal = moviesEvaluated
        .map(movieEval => movieEval.evaluation === 'Average')
        .reduce((acc, averageMovie) => {
            return acc + averageMovie;
        });
    console.log('Total Average movies are: ' + averageMoviesTotal);
    // BAD movies number
    let badMoviesTotal = moviesEvaluated
        .map(movieEval => movieEval.evaluation === 'Bad')
        .reduce((acc, badMovie) => {
            return acc + badMovie;
        });
    console.log('Total Good movies are: ' + badMoviesTotal);


    /* 4- Count the number of movies containing the following keywords:
          ["The", "dog", "who", "is", "not", "a", "man"].
          Can you make sure the search is case insensitive? */
    let moviesWithKeywords = moviesEvaluated.map(movie => movie.title);
    // console.log(moviesWithKeywords);



    // 5- Count the number of movies made between 1980-1989 (including both the years).

});/* *-*-* CLOSING Request *-*-* */