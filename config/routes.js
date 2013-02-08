var mongoose = require('mongoose')	
	, nforce = require('nforce')
  , config = require('./envconfig')['development']
	, async = require('async');

//module.exports = function (app, passport, auth) { //this is the standard changing this in the next line for forcedotcom
module.exports = function (app, passport) {	
  // user routes  
  var users = require('../app/controllers/users')
  app.get('/login', users.login)
  app.get('/signup', users.signup)
  app.get('/logout', users.logout)
  app.post('/users', users.create)
  /*
  app.post('/users/session', passport.authenticate('local', {failureRedirect: '/login'}), users.session)
  app.get('/users/:userId', users.show)
  app.get('/auth/facebook', passport.authenticate('facebook', { scope: [ 'email', 'user_about_me'], failureRedirect: '/login' }), users.signin)
  app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), users.authCallback)
  app.get('/auth/github', passport.authenticate('github', { failureRedirect: '/login' }), users.signin)
  app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), users.authCallback)
  app.get('/auth/twitter', passport.authenticate('twitter', { failureRedirect: '/login' }), users.signin)
  app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), users.authCallback)
  app.get('/auth/google', passport.authenticate('google', { failureRedirect: '/login', scope: 'https://www.google.com/m8/feeds' }), users.signin)
  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login', scope: 'https://www.google.com/m8/feeds' }), users.authCallback)
  */
  //app.get('/auth/forcedotcom', passport.authenticate('forcedotcom', { failureRedirect: '/login'}), users.signin)
  //app.get('/auth/forcedotcom/callback', passport.authenticate('forcedotcom', { failureRedirect: '/login' }), users.authCallback)

  /*app.param('userId', function (req, res, next, id) {
    User
      .findOne({ _id : id })
      .exec(function (err, user) {
        if (err) return next(err)
        if (!user) return next(new Error('Failed to load User ' + id))
        req.profile = user
        next()
      })
  })*/

  // certificate routes controller
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

