const { TwitterApi } = require('twitter-api-v2');
require('dotenv').config();

const client = new TwitterApi({
    appKey: process.env.API_KEY,
    appSecret: process.env.API_KEY_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_TOKEN_SECRET,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
});

const rwClient = client.readWrite;

async function postTweet() {
    try {
        const { data } = await rwClient.v2.tweet('Hello, Twitter!');
        console.log('Tweet posted successfully!', data);
    } catch (err) {
        console.error(err);
    }
}

postTweet();