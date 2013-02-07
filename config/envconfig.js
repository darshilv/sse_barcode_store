module.exports = {
    development: {
      //db: 'mongodb://darshilv:sunrise@linus.mongohq.com:10015/app10179448',      
      db: 'mongodb://localhost:27017/canvas_certify',
      forcedotcom: {
          clientID : "3MVG99OxTyEMCQ3jECnCcpSg34i_iCShPS1SC4anGHv7qbKBN6UPKpzSlyGC_XAhTCxv8aP_tag4QLPTIQeAf"
        , clientSecret: "425108006027707740"
        , callbackURL: "http://localhost:3001/auth/forcedotcom/callback"
      },
      dbdotcom: {
          clientID : "3MVG9rFJvQRVOvk6Uso9pD8u3D_ZVfoy4OMl3bhOWWBaGvJpTmf0SkOld4yAb10QtUN19r7EUqqVGD7Em1vqJ"
        , clientSecret : "1849982080134545956"
        , callbackURL : "http://localhost:3001/auth/dbdotcom/callback"
      },
      dropbox:{
          clientID : "ytgn9a7ln8nwzoo"
        , clientSecret : "gkeadkuf0r140gl"
        , callbackURL : "http://localhost:3001/auth/dropbox/callback"
        , token : "lvwv8nkr5jkudja"
        , tokenSecret : "cjyukwnjwdc3kjo"
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