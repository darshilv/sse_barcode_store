var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var OrgSchema = new Schema({
    name: String  
  , orgId: String
  , issued_at : String
  , instance_url : String
  , signature : String
  , access_token : String
  , id : String


})

/*CertificateSchema.path('name').validate(function (name) {  
  return name.length
}, 'Name cannot be blank')*/

mongoose.model('Org', OrgSchema)