//This doesn't work yet!!!!!!
var Engine = {
        test: function(callback) {
            console.log('test here');
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

module.exports = Engine;
