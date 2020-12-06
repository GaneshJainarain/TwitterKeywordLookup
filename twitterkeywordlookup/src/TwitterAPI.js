

var Twitter = require('twitter');
require('dotenv/config');

const TWITTER_API_KEY = process.env.TWITTER_API_KEY
const TWITTER_API_SECRET_KEY = process.env.TWITTER_API_SECRET_KEY
const TWITTER_ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN
const TWITTER_ACCESS_TOKEN_SECRET = process.env.TWITTER_ACCESS_TOKEN_SECRET

var client = new Twitter({
    consumer_key: TWITTER_API_KEY,
    consumer_secret: TWITTER_API_SECRET_KEY,
    access_token_key: TWITTER_ACCESS_TOKEN,
    access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
});
<<<<<<< HEAD

console.log(`api key: ${process.env.TWITTER_API_KEY}`)
console.log('api secret:', process.env.TWITTER_API_SECRET_KEY)
=======
async () => {

    var params = {q: '#NIO since:2020-12-01', count:1000};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    
    }
});

}

  




>>>>>>> f224617d7a2a84c997929a59693da1e57fca07b3
