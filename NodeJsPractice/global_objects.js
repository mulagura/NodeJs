console.log(__filename);    /*fetches filename*/
console.log(__dirname);       /*fetches directry name*/  


/*setTimeout global object*/

setTimeout(function()
{
	console.log("Hii");

},4000);

/*setInterval global object*/
var time =0;
var stop = setInterval(function()
{
	 time = time+3;
	console.log(time + "For every 3 seconds Time interval happens");
	if(time >= 9)
	{
		clearInterval(stop);     /*clearInterval */
	}
},3000);

