module.exports = {
    development: {      
      db: '',
      forcedotcom: {
          clientID : ""
        , clientSecret: ""
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
