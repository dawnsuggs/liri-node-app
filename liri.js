var keys = require("./keys");

console.log(keys);

var Twitter = require('twitter');
 
var client = new Twitter(keys);
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});



var Spotify = require('node-spotify-api');
 console.log(Spotify)
var spotify = new Spotify({
  id: '64c2287bb7a34342979754599a422f05',
  secret: 'f5eaed421823425c8be13827480f64c0'
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  
console.log(JSON.stringify(data, null, 2)); 
});