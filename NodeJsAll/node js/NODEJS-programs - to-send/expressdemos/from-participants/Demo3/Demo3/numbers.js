index = function(req,res){
	var n1 = Number(req.params.num1);
	var n2 = Number(req.params.num2);
	var avg = (n1+n2)/2;
	res.send("This is numbers index section, Average of passed params is: "+avg);
	//res.send("Average is: "+avg);
	
}

contact = function(req,res){
	res.send("This is numbers contact section");
}

module.exports.index = index;
module.exports.contact = contact;