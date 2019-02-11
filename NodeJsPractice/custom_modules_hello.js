exports.sayHello = function()
{
	return "Hi Ram Mulagura Type 1";
}

/*or*/

var hi = function(a,b)
{
	return "Ram exports Type 2";
}

module.exports.poc=hi;


/*or*/

module.exports = {

					 world : function()
					{
						return "Ram exports Type 3";
					}

};
