var express = require('express');
var Gmail = require('gmail-imap');
var app = express();

var cfg = {
    CLIENT_ID: '12345789.apps.googleusercontent.com',
    CLIENT_SECRET: 'jojojejejejojojejejej'
};

var gmail = new Gmail(cfg);

// Get gmail's authentication URL
var authUrl = gmail.getAuthUrl();

app.get('/health', function(req, res) {

  res.type('text/plain');
  res.send('Im ready to use!!');
});

app.get('/code', function(req, res) {
	
  // redirect user to authUrl
  res.redirect(authUrl);
});

app.get('/callback', function(req, res) {

  res.type('text/plain');
  res.send('code:'+req.query.code);
});

app.get('/email', function(req, res) {

	gmail.getAccessToken(req.query.code, function(callback) {
	  if(callback.access_token) {
		gmail.getEmail(callback.access_token, function(data) {		
		  res.type('text/plain');
		  res.send(data.emails[0].value);		  
		});
	  }
	});	
});

app.get('/access_token', function(req, res) {

	gmail.getAccessToken(req.query.code, function(callback) {
	  if(callback.access_token) {
		res.type('text/plain');
		res.send("callback.access_token:"+callback.access_token);
	  }
	});	
});

app.listen(process.env.PORT || 3000);
