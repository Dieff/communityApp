//This doesn't work yet!!!!!!
var AjaxEngine = {
        test: function(callback) {
          console.log('running ajax test');
            return fetch('https://10.0.2.2/CommunityAppBackend/test.json')
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log('returning ajax message', responseJson);
                    return responseJson.movies;
                })
                .catch((error) => {
                    console.error('returning ajax message', error);
                });
        }
};

module.exports = AjaxEngine;

//https://10.0.2.2/CommunityAppBackend/test.json
//http://facebook.github.io/react-native/movies.json
//http://10.0.0.2/CommunityAppBackend/test.json
