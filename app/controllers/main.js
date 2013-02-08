var nforce = require('nforce')
	
exports.index = function (req,res,org,oauth){
	//console.log(org + "||" + oauth);	
	res.render('main/index', {title: 'List of Certifications', certificates: {}});
}

exports.show = function(req,res,org,oauth){
	var acc;
	console.log();
	var query = 'SELECT Id, Name, Barcode__c, Product_Image__c, Product_Name__c FROM Product_Store__c where Barcode__c = \'' + req.params.key + '\'';

	org.query(query, oauth, function(err, resp){
	  	if(!err && resp.records) {
  			console.log("we found some records");
			acc = resp.records[0];

			console.log(acc.Id + "|" + acc.Name + "|" + acc.Barcode__c + "|" + acc.Product_Name__c + "|" + acc.Product_Image__c );
			res.send(acc);
		} else{
			console.log(err);
			res.send(err);
		}

	});
		
}