// Week 7 homework - Step 1_2

// Ajax function
function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request
    request.send();
}

// 1     Give each movie a tag: Good (>=7), Average (4-6), Bad (0-3) based on the ratings.
getAjaxData('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json', moviesData => {
        console.log(moviesData);
    });

// 2     Calculate the average rating of all the movies.
// 3     Count the total number of Good, Average and Bad movies.
// 4     Count he number of movies containing the following keywords: ["The", "dog", "who", "is", "not", "a", "man"]. Can you make sure the search is case insensitive?
// 5     Count the number of movies made between 1980-1989 (including both the years).

