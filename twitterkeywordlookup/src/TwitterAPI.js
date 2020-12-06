

var Twitter = require('twitter');
require('dotenv/config');

const ApiKey = process.env.ApiKey
const ApiSecretKey = process.env.ApiSecretKey
const AccessToken = process.env.AccessToken
const AccessTokenSecret = process.env.AccessTokenSecret

var client = new Twitter({
    consumer_key: ApiKey,
    consumer_secret: ApiSecretKey,
    access_token_key: AccessToken,
    access_token_secret: AccessTokenSecret
});
async () => {

    var params = {q: '#NIO since:2020-12-01', count:1000};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    
    }
});

}

  




