

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
