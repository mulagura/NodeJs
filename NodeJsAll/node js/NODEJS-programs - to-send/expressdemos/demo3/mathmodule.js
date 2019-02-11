add=function(req,res) {
	var n1=Number(req.params.n1);
	var n2=Number(req.params.n2);
	var sum=n1+n2;
	res.send('Sum of the numbers is: '+sum);
}

product=function(req,res) {
	var n1=Number(req.params.n1);
	var n2=Number(req.params.n2);
	var prod=n1*n2;
	res.send('Product of the numbers is: '+prod);
}

module.exports.add=add;
module.exports.product=product;

