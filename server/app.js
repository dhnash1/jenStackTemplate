var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});
var port = process.env.PORT || 8080;
var awardArray = [
  // Starting array.
  {eventName: 'X-Games 2016 Skateboard Big Air', athleteName: 'Andy Taton', award: 'Least Improved'},
  {eventName: 'U.S. Snowboarding Grand Prix 2016', athleteName: 'Deforis Nash', award: 'Gold Medal'},
  {eventName: 'Dew Tour 2015', athleteName: 'Dev Jana', award: 'Best Hair'}
];

app.listen(port, function(req, res){
  console.log('server listening on', port);
}); // end spin up server

// base url
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('views/index.html'));
}); // end base url

app.get('/testGet', function(req, res){
  /* Called by client on document.ready. Gives the client the
  initial array contents so they can be displayed to the DOM.*/
  console.log('testGet url hit');
  var initialAwardObject = {
    awardArray: awardArray
  };
  // Respond to request with initialAwardObject.
  res.send(initialAwardObject);
}); // end testGet

// testPost
app.post('/testPost', urlEncodedParser, function(req, res){
  // Called when client presses buttun to add an award object.
  console.log('testPost url hit. req.body:', req.body);
  awardArray.push(req.body);
  console.log(awardArray);
  // Assemble award object to return.
  var awardObjectToReturn = {
    awardArray: awardArray
  };
  // return objectToReturn
  res.send(awardObjectToReturn);
}); // end testPost

// static folder
app.use(express.static('public'));
