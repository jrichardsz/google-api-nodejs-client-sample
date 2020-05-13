var express = require('express');
var GoogleApiClient = require('google-api-nodejs-client');
var app = express();

var cfg = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    REDIRECT_URI: process.env.REDIRECT_URI,
    SCOPE: process.env.SCOPE
};

var googleApiClient = new GoogleApiClient(cfg);

// Get googleApiClient's authentication URL
var authUrl = googleApiClient.getAuthUrl();
console.log("google authUrl");
console.log(authUrl);

app.get('/', function(req, res) {

  res.type('text/html');
  res.send('<a href="/code">step 1: get code</a>');
});

app.get('/health', function(req, res) {

  res.type('text/plain');
  res.send('Im ready to use!!');
});

app.get('/code', function(req, res) {
  // redirect user to authUrl
  res.redirect(authUrl);
});

app.get('/callback', function(req, res) {

  res.type('text/html');
  var response = '<p>step 1 response: </p>';
  response += '<p>'+req.query.code+'</p>';
  response += '<p>- This is the parameter is called oauth code or authorization code in oauth2 flow.</p>';
  response += '<p>- This value is the parameter of the next step</p>';
  response += '<p>http://localhost:3000/access_token?code=4/zgGa-yiuu***</p>';
  response += '<a href="/access_token?code='+req.query.code+'">step 2: get access_token</a>';
  res.send(response);
});

app.get('/email', function(req, res) {

  googleApiClient.getEmail(req.query.access_token, function(data) {
    res.type('text/plain');
    res.send(data.emailAddresses[0].value);
  });
});

app.get('/access_token', function(req, res) {

	googleApiClient.getAccessToken(req.query.code, function(callback) {
	  if(callback.access_token) {  
    res.type('text/html');
    var response = '<p>step 2 response: </p>';
    response += '<p>'+callback.access_token+'</p>';
    response += '<p>- This is the parameter is called access_token in oauth2 flow.</p>';
    response += '<p>- This value is the parameter of the next step</p>';
    response += '<p>http://localhost:3000/email?access_token=ya29.a0AfH6SMAE7j7***</p>';
    response += '<a href="/email?access_token='+callback.access_token+'">step 3: get email  </a>';
    res.send(response);    
    
	  }
	});
});

app.listen(process.env.PORT || 3000);
