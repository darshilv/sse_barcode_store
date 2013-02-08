module.exports = {
    development: {      
      db: 'mongodb://darshil:salesforce1@linus.mongohq.com:10069/app11693222',
      forcedotcom: {
          clientID : "3MVG9rFJvQRVOvk5fw9B29RZ6Bb3.tyIoXO4MKmLW5X1y5aHYvIx5a5t5DTEcVXLy2pmoQot4I3TqqzehRHzG"
        , clientSecret: "5737018970257457888"
        , callbackURL: "http://localhost:3001/auth/forcedotcom/callback"
      },
      dbdotcom: {
          clientID : ""
        , clientSecret : ""
        , callbackURL : "http://localhost:3001/auth/dbdotcom/callback"
      },
      dropbox:{
          clientID : ""
        , clientSecret : ""
        , callbackURL : "http://localhost:3001/auth/dropbox/callback"
        , token : ""
        , tokenSecret : ""
      }
    }
  , test: {

    }
  , production: {
      forcedotcom: {
        clientID: process.env.CLIENT_ID
      , clientSecret: process.env.CLIENT_SECRET
      , callbackURL: process.env.REDIRECT_URI
      }
    }
}
