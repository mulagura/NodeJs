index=function(req,res) {
	res.send('Employee ID is:'+req.params.id);
}

contacts=function(req,res) {
	res.send("Contact details are shown here");
}

module.exports.index=index;
module.exports.contacts=contacts;

