index=function(req,res) {
	res.send('Employee ID is:'+req.query.id+'Employee Name is:'+req.query.name);
	
}

exports.index=index;

