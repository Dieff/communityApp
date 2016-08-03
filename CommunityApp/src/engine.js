//This doesn't work yet!!!!!!
var AjaxEngine = {
        test: function(callback) {
            return fetch('http://facebook.github.io/react-native/movies.json')
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    return responseJson.movies;
                })
                .catch((error) => {
                    console.error(error);
                });
        }
};

module.exports = AjaxEngine;


//http://facebook.github.io/react-native/movies.json
