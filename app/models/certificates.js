var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var CertificateSchema = new Schema({
    name: String  
  , activeImage : { data: Buffer, contentType: String }
  , inactiveImage : { data: Buffer, contentType: String }
})

/*CertificateSchema.path('name').validate(function (name) {  
  return name.length
}, 'Name cannot be blank')*/

mongoose.model('Certificate', CertificateSchema)