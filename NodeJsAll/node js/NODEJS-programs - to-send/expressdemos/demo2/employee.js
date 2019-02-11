index=function(req,res) {
	res.send('Welcome to Employee');
}

contacts=function(req,res) {
	res.send('Welcome to Employee Contact page');
}

module.exports.index=index;
module.exports.contacts=contacts;
