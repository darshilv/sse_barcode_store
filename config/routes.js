var mongoose = require('mongoose')	
	, nforce = require('nforce')
  , config = require('./envconfig')['development']
	, async = require('async');

//module.exports = function (app, passport, auth) { //this is the standard changing this in the next line for forcedotcom
module.exports = function (app, passport) {	
  
  var oauth;
  var org = new nforce.createConnection({
      clientId: config.forcedotcom.clientID,
      clientSecret: config.forcedotcom.clientSecret,
      redirectUri: config.forcedotcom.callbackURL,    
      apiVersion: 'v26.0',
      environment: 'production'
    });

  org.authenticate({ username: 'ksumner@wm_ignite.demo', password: 'salesforce1'}, function(err, resp){
    if(!err) {
      oauth = resp;
      console.log(oauth);
    } else{
      console.log(err);
    }
  });

  // certificate routes controller
  var main = require('../app/controllers/main')
  //var certificates = require('../app/controllers/certificates')

  // home route
  //app.post('/', certificates.canvasindex)
  app.get('/', function(req,res){
      main.index(req,res, org, oauth);
  });

  app.get('/:key', function(req,res){
      main.show(req,res,org, oauth);
  });
}

