var Dropbox = require("dropbox")	

exports.index = function (req,res){
	var config = require('../../config/envconfig')['development'];
	var client = new Dropbox.Client({		
	    key: config.dropbox.clientID, secret: config.dropbox.clientSecret, sandbox: true, token: config.dropbox.token, tokenSecret: config.dropbox.tokenSecret
	});
	client.authDriver(new Dropbox.Drivers.NodeServer());
	if(!client.isAuthenticated){
		client.authenticate(function(error, client) {
			if (!error) {
				//authentication successful, so let's store everything		
				console.log(client);				
			} else{
				console.log(error);
			}

		});
	} else{
		//the user is already authenticated
		client.getUserInfo(function(err,uinfo){
			if(!err){
				console.log(uinfo.name);
			} else{
				console.log(err);
			}
		});
		/*client.writeFile("hello_world.txt", "Hello, world!\n" , function(error, stat) {
			if (!error) {
			    console.log("File saved as revision " + stat.revisionTag);		    
		  	} else{
		  		console.log(error);  // Something went wrong.
		  	}		  
		});*/
		res.render('main/index', {title: 'List of Certifications', certificates: {}});
	}
}