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

const omdb = require('omdbapi');

// console.log(omdb);

omdb.search({
    search: "eraserhead",  
    year: "2011",               
    imdbRating: "7.4",
    rottenTomatoes: "91%",
    country: "USA",
    language: "English",
    plot: "Henry Spencer tries to survive his industrial environment, his angry girlfriend, and the unbearable screams of his newly born mutant child.",
   	actors: "Jack Nance, Charlotte Stewart, Allen Joseph, Jeanne Bates"
}).then(res => {
	console.log('got response:', res);
}).catch(console.error);
 
omdb.get({
    id: 'tt0074486',            
    title: "eraserhead",   
    year: "2011",               
    imdbRating: "7.4",

    rottenTomatoes: "91%",
    country: "USA",
    language: "English",
    plot: "Henry Spencer tries to survive his industrial environment, his angry girlfriend, and the unbearable screams of his newly born mutant child.",
    actors: "Jack Nance, Charlotte Stewart, Allen Joseph, Jeanne Bates"
  
}).then(res => {
    console.log('got response:', res);
}).catch(console.error);

// var fs = require("fs");

// fs.readFile("random.txt", "utf8", function(error, data) {

// spotify.search({ type: 'track', query: 'random.txt' }, function(err, data) {
  
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
  
//   console.log(JSON.stringify(data, null, 2)); 

// });

//   console.log(data);

//   var dataArr = data.split(",");

//   We will then re-display the content as an array for later use.
//   console.log(dataArr);
  

// });




